package com.int20h.backend.services.serviceimpls;

import com.int20h.backend.domain.dtos.UserDto;
import com.int20h.backend.domain.entities.User;
import com.int20h.backend.repositories.UserRepository;
import com.int20h.backend.services.IMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final IMapper<User, UserDto> userMapper;

    public User requireOneToken(String token) {
        return userRepository.findByExternalProviderToken(token);
    }

    public User requireOneId(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }

    public void save(UserDto dto) {
        User entity = new User();
        entity = userMapper.convertToEntity(dto, entity);
        userRepository.save(entity);
    }

    public void delete(UUID id) {
        userRepository.deleteById(id);
    }

    public void update(UUID id, UserDto dto) {
        User entity = requireOneId(id);
        entity = userMapper.convertToEntity(dto, entity);
        userRepository.save(entity);
    }

    public UserDto getById(UUID id) {
        User original = requireOneId(id);
        return userMapper.convertToDTO(original);
    }

    public List<UserDto> getAll() {
        List<User> original = userRepository.findAll();
        return userMapper.convertToDtoList(original);
    }

    public UserDto getByToken(String token){
        return userMapper.convertToDTO(requireOneToken(token));
    }
}
