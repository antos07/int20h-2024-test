package com.int20h.backend.services.serviceimpls;

import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.domain.entities.Bid;
import com.int20h.backend.repositories.BidRepository;
import com.int20h.backend.services.IMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BidService {
    private final BidRepository bidRepository;

    private final UserService userService;
    private final AuctionService auctionService;

    private final IMapper<Bid, BidDto> bidMapper;

    public Bid requireOneId(UUID id) {
        return bidRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(BidDto dto) {
        Bid entity = setDependency(dto);
        entity = bidMapper.convertToEntity(dto, entity);
        bidRepository.save(entity);
    }

    public void delete(UUID id) {
        bidRepository.deleteById(id);
    }

    public void update(UUID id, BidDto dto) {
        Bid entity = requireOneId(id);
        entity = bidMapper.convertToEntity(dto, entity);
        bidRepository.save(entity);
    }

    public BidDto getById(UUID id) {
        Bid original = requireOneId(id);
        return bidMapper.convertToDTO(original);
    }

    public List<BidDto> getAll() {
        List<Bid> original = bidRepository.findAll();
        return bidMapper.convertToDtoList(original);
    }

    private Bid setDependency(BidDto dto) {
        Bid bean = new Bid();
        bean.addBid(
                userService.requireOneId(dto.getUserId()),
                auctionService.requireOneId(dto.getAuctionId())
        );
        bean = bidMapper.convertToEntity(dto, bean);
        return bean;
    }
}
