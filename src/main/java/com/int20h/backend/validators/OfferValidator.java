package com.int20h.backend.validators;

import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.services.serviceimpls.BidService;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class OfferValidator implements ConstraintValidator<Offer, BidDto> {
    private final BidService bidService;

    @Override
    public void initialize(Offer constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(BidDto bidDto, ConstraintValidatorContext constraintValidatorContext) {
        return bidDto.getOffer() > bidService.getMinOffer(bidDto.getAuctionId());
    }
}
