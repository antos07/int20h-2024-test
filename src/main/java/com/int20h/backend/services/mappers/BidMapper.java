package com.int20h.backend.services.mappers;

import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.domain.entities.Bid;
import com.int20h.backend.services.IMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class BidMapper implements IMapper<Bid, BidDto> {
    @Override
    public Bid convertToEntity(BidDto dto, Bid foundEntity) {
        return new Bid(
                foundEntity.getId(),
                foundEntity.getUser(),
                foundEntity.getAuction(),
                LocalDateTime.now(),
                dto.getOffer()
        );
    }

    @Override
    public BidDto convertToDTO(Bid entity) {
        return new BidDto(
                entity.getUser().getId(),
                entity.getAuction().getId(),
                entity.getCreatedAt(),
                entity.getOffer()
        );
    }

    @Override
    public List<BidDto> convertToDtoList(List<Bid> entities) {
        List<BidDto> dtoList = new ArrayList<>();
        for (Bid entity : entities) {
            dtoList.add(convertToDTO(entity));
        }
        return dtoList;
    }

    @Override
    public Map<UUID, BidDto> convertToDtoMap(List<Bid> entities) {
        Map<UUID, BidDto> dtoMap = new HashMap<>();
        for (Bid entity : entities) {
            dtoMap.put(entity.getId(), convertToDTO(entity));
        }
        return dtoMap;
    }
}
