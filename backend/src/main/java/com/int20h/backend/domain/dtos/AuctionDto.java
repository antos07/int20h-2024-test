package com.int20h.backend.domain.dtos;

import com.int20h.backend.domain.AuctionStatus;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Value
public class AuctionDto implements Serializable {
    UUID userId;
    String title;
    String description;
    //byte[] photo;
    AuctionStatus status;
    float minOffer;
    LocalDateTime createdAt;
    LocalDateTime startAt;
    LocalDateTime endAt;
}
