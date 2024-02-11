package com.int20h.backend.services.mappers;

import com.int20h.backend.domain.dtos.UserDto;
import com.int20h.backend.domain.entities.User;
import com.int20h.backend.services.IMapper;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserMapper implements IMapper<User, UserDto> {
    @Override
    public User convertToEntity(UserDto dto, User foundEntity) {
        return new User(
                foundEntity.getId(),
                dto.getUsername(),
                dto.getEmail(),
                dto.getExternalProviderToken(),
                foundEntity.getBids(),
                foundEntity.getAuctions()
        );
    }

    @Override
    public UserDto convertToDTO(User entity) {
        return new UserDto(
                entity.getUsername(),
                entity.getEmail(),
                entity.getExternalProviderToken()
        );
    }

    @Override
    public List<UserDto> convertToDtoList(List<User> entities) {
        List<UserDto> dtoList = new ArrayList<>();
        for (User entity : entities) {
            dtoList.add(convertToDTO(entity));
        }
        return dtoList;
    }

    @Override
    public Map<UUID, UserDto> convertToDtoMap(List<User> entities) {
        Map<UUID, UserDto> dtoMap = new HashMap<>();
        for (User entity : entities) {
            dtoMap.put(entity.getId(), convertToDTO(entity));
        }
        return dtoMap;
    }
}
