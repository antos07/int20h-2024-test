package com.int20h.backend.services.serviceimpls;

import com.int20h.backend.domain.AuctionStatus;
import com.int20h.backend.domain.dtos.AuctionDto;
import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.domain.dtos.UserDto;
import com.int20h.backend.domain.entities.Auction;
import com.int20h.backend.domain.entities.Bid;
import com.int20h.backend.domain.entities.User;
import com.int20h.backend.repositories.AuctionRepository;
import com.int20h.backend.services.IMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuctionService {
    private final AuctionRepository auctionRepository;

    private final UserService userService;
    private final FileService fileService;

    private final IMapper<Auction, AuctionDto> auctionMapper;
    private final IMapper<Bid, BidDto> bidMapper;
    private final IMapper<User, UserDto> userMapper;

    public Auction requireOneId(UUID id) {
        return auctionRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(AuctionDto dto) {
        Auction entity = setDependency(dto);
        entity = auctionMapper.convertToEntity(dto, entity);
        entity.setCreatedAt(LocalDateTime.now());
        auctionRepository.save(entity);
    }

    public void delete(UUID id) {
        auctionRepository.deleteById(id);
    }

    public void update(UUID id, AuctionDto dto) {
        Auction entity = requireOneId(id);
        entity = auctionMapper.convertToEntity(dto, entity);
        auctionRepository.save(entity);
    }

    public AuctionDto getById(UUID id) {
        Auction original = requireOneId(id);
        return auctionMapper.convertToDTO(original);
    }

    public List<AuctionDto> getAll() {
        List<Auction> original = auctionRepository.findAll();
        return auctionMapper.convertToDtoList(original);
    }

    public List<BidDto> getBidHistory(UUID id) {
        Auction auction = requireOneId(id);
        List<BidDto> dtoBids = new ArrayList<>();
        for (Bid bid : auction.getBids()) {
            dtoBids.add(bidMapper.convertToDTO(bid));
        }
        return dtoBids;
    }

    public List<UserDto> getActiveUsers(UUID id) {
        Auction auction = requireOneId(id);
        List<UserDto> dtoUsers = new ArrayList<>();
        for (Bid bid : auction.getBids()) {
            User author = bid.getUser();
            dtoUsers.add(userMapper.convertToDTO(author));
        }
        return dtoUsers;
    }

    private Auction setDependency(AuctionDto dto) {
        Auction bean = new Auction();
        bean.addAuction(userService.requireOneId(dto.getUserId()));
        bean = auctionMapper.convertToEntity(dto, bean);
        return bean;
    }

    public AuctionDto closeAuction(UUID id) {
        Auction auction = requireOneId(id);
        auction.setStatus(AuctionStatus.CLOSED);

        return auctionMapper.convertToDTO(auction);
    }

    public void setPhoto(MultipartFile image, UUID id) {
        try {
            byte[] data = image.getBytes();
            Auction entity = requireOneId(id);
            entity.setPhoto(data);
            auctionRepository.save(entity);
        } catch (IOException e) {
            throw new RuntimeException("Image saving failed");
        }
    }

    public byte[] getPhoto(UUID id) {
        Auction entity = requireOneId(id);
        return entity.getPhoto();
    }

    public float getHighestOffer(UUID id) {
        Auction auction = requireOneId(id);
        float highestOffer = auction.getMinOffer();
        if (auction.getBids().isEmpty()) return highestOffer;

        for (Bid bid : auction.getBids()) {
            if (bid.getOffer() > highestOffer) highestOffer = bid.getOffer();
        }
        return highestOffer;
    }
}
