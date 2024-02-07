package com.int20h.backend.services.serviceimpls;

import com.int20h.backend.domain.dtos.AuctionDto;
import com.int20h.backend.domain.entities.Auction;
import com.int20h.backend.repositories.AuctionRepository;
import com.int20h.backend.services.IMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuctionService {
    private final AuctionRepository AuctionRepository;
    private final IMapper<Auction, AuctionDto> AuctionMapper;

    public Auction requireOneId(UUID id) {
        return AuctionRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(AuctionDto dto) {
        Auction entity = new Auction();
        entity = AuctionMapper.convertToEntity(dto, entity);
        AuctionRepository.save(entity);
    }

    public void delete(UUID id) {
        AuctionRepository.deleteById(id);
    }

    public void update(UUID id, AuctionDto dto) {
        Auction entity = requireOneId(id);
        entity = AuctionMapper.convertToEntity(dto, entity);
        AuctionRepository.save(entity);
    }

    public AuctionDto getById(UUID id) {
        Auction original = requireOneId(id);
        return AuctionMapper.convertToDTO(original);
    }

    public List<AuctionDto> getAll() {
        List<Auction> original = AuctionRepository.findAll();
        return AuctionMapper.convertToDtoList(original);
    }
}
