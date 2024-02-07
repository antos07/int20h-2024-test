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
    private final BidRepository BidRepository;
    private final IMapper<Bid, BidDto> BidMapper;

    public Bid requireOneId(UUID id) {
        return BidRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(BidDto dto) {
        Bid entity = new Bid();
        entity = BidMapper.convertToEntity(dto, entity);
        BidRepository.save(entity);
    }

    public void delete(UUID id) {
        BidRepository.deleteById(id);
    }

    public void update(UUID id, BidDto dto) {
        Bid entity = requireOneId(id);
        entity = BidMapper.convertToEntity(dto, entity);
        BidRepository.save(entity);
    }

    public BidDto getById(UUID id) {
        Bid original = requireOneId(id);
        return BidMapper.convertToDTO(original);
    }

    public List<BidDto> getAll() {
        List<Bid> original = BidRepository.findAll();
        return BidMapper.convertToDtoList(original);
    }
}
