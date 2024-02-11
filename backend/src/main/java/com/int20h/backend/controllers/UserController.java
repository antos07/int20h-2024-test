package com.int20h.backend.controllers;

import com.int20h.backend.domain.dtos.UserDto;
import com.int20h.backend.services.serviceimpls.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Validated
public class UserController {
    private final UserService userService;

    @DeleteMapping("/{id}")
    public void delete(@Valid @NotNull @PathVariable("id") UUID id) {
        userService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Valid @NotNull @PathVariable("id") UUID id,
                       @Valid @RequestBody UserDto dto) {
        userService.update(id, dto);
    }

    @GetMapping("/{id}")
    public UserDto getById(@Valid @NotNull @PathVariable("id") UUID id) {
        return userService.getById(id);
    }

    @GetMapping("/getAll")
    public List<UserDto> getAll() {
        return userService.getAll();
    }

    @GetMapping("/getCurrent")
    public Object getCurrent(Authentication authentication) {
        return authentication.getPrincipal();
    }

    @GetMapping("/getCurrentDto")
    public UserDto getCurrentDto(Authentication authentication) {
        String token = authentication.getName();
        return userService.getByToken(token);
    }

    @GetMapping("/getCurrentId")
    public UUID getCurrentId(Authentication authentication) {
        String token = authentication.getName();
        return userService.requireOneToken(token).getId();
    }

}
