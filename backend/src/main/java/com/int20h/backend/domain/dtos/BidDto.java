package com.int20h.backend.domain.dtos;

import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Value
public class BidDto implements Serializable {
    UUID userId;
    UUID auctionId;
    LocalDateTime createdAt;
    float offer;
}
