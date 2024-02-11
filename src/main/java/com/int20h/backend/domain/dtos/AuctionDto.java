package com.int20h.backend.domain.dtos;

import com.int20h.backend.domain.AuctionStatus;
import com.int20h.backend.validators.AuctionDates;
import jakarta.validation.constraints.Min;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Value
@AuctionDates
public class AuctionDto implements Serializable {
    UUID Id;
    UUID userId;
    String title;
    String description;
    //byte[] photo;
    AuctionStatus status;
    @Min(0)
    float minOffer;
    LocalDateTime createdAt;
    LocalDateTime startAt;
    LocalDateTime endAt;
}
