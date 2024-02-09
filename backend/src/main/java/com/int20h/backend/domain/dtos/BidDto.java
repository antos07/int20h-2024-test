package com.int20h.backend.domain.dtos;

import com.int20h.backend.validators.Offer;
import jakarta.validation.constraints.Min;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Value
@Offer
public class BidDto implements Serializable {
    UUID userId;
    UUID auctionId;
    LocalDateTime createdAt;
    @Min(0)
    float offer;
}
