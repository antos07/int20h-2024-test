package com.int20h.backend.domain.dtos;

import lombok.Value;

import java.io.Serializable;
import java.util.UUID;

@Value
public class UserDto implements Serializable {
    String username;
    String email;
    String externalProviderToken;
}
