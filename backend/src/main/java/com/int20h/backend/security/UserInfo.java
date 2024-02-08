package com.int20h.backend.security;

import com.int20h.backend.domain.dtos.UserDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Map;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
public abstract class UserInfo {
    protected Map<String, Object> attributes;

    public UUID getId() {
        byte[] data = getToken().getBytes();
        return UUID.nameUUIDFromBytes(data);
    }

    public abstract String getToken();

    public abstract String getName();

    public abstract String getEmail();

    public abstract String getProvider();

    public ZonedDateTime getLocalTime() {
        ZoneId userTimeZone = ZoneId.systemDefault();
        Instant utcInstant = Instant.now();
        ZonedDateTime zonedDateTime = utcInstant.atZone(userTimeZone);
        return zonedDateTime;
    }

    public UserDto getDto() {
        return new UserDto(getName(), getEmail(), getToken());
    }
}
