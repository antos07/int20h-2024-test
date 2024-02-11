package com.int20h.backend.services.mappers;

import com.int20h.backend.domain.dtos.AuctionDto;
import com.int20h.backend.domain.entities.Auction;
import com.int20h.backend.services.IMapper;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuctionMapper implements IMapper<Auction, AuctionDto> {
    @Override
    public Auction convertToEntity(AuctionDto dto, Auction foundEntity) {
        return new Auction(
                foundEntity.getId(),
                foundEntity.getUser(),
                foundEntity.getBids(),
                dto.getTitle(),
                dto.getDescription(),
                foundEntity.getPhoto(),
                dto.getStatus(),
                dto.getMinOffer(),
                dto.getCreatedAt(),
                dto.getStartAt(),
                dto.getEndAt()
        );
    }

    @Override
    public AuctionDto convertToDTO(Auction entity) {
        return new AuctionDto(
                entity.getId(),
                entity.getUser().getId(),
                entity.getTitle(),
                entity.getDescription(),
                //entity.getPhoto(),
                entity.getStatus(),
                entity.getMinOffer(),
                entity.getCreatedAt(),
                entity.getStartAt(),
                entity.getEndAt()
        );
    }

    @Override
    public List<AuctionDto> convertToDtoList(List<Auction> entities) {
        List<AuctionDto> dtoList = new ArrayList<>();
        for (Auction entity : entities) {
            dtoList.add(convertToDTO(entity));
        }
        return dtoList;
    }

    @Override
    public Map<UUID, AuctionDto> convertToDtoMap(List<Auction> entities) {
        Map<UUID, AuctionDto> dtoMap = new HashMap<>();
        for (Auction entity : entities) {
            dtoMap.put(entity.getId(), convertToDTO(entity));
        }
        return dtoMap;
    }
}