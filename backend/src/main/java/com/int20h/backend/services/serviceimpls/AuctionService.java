package com.int20h.backend.services.serviceimpls;

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

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuctionService {
    private final AuctionRepository auctionRepository;
    private final IMapper<Auction, AuctionDto> auctionMapper;
    private final IMapper<Bid, BidDto> bidMapper;
    private final IMapper<User, UserDto> userMapper;

    public Auction requireOneId(UUID id) {
        return auctionRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(AuctionDto dto) {
        Auction entity = new Auction();
        entity = auctionMapper.convertToEntity(dto, entity);
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
        for (Bid bid : auction.getBids()){
            dtoBids.add(bidMapper.convertToDTO(bid));
        }
        return dtoBids;
    }

    public List<UserDto> getActiveUsers(UUID id) {
        Auction auction = requireOneId(id);
        List<UserDto> dtoUsers = new ArrayList<>();
        for (Bid bid : auction.getBids()){
            User author = bid.getUser();
            dtoUsers.add(userMapper.convertToDTO(author));
        }
        return dtoUsers;
    }
}
