package com.int20h.backend.validators;

import com.int20h.backend.domain.dtos.AuctionDto;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class AuctionDatesValidator implements ConstraintValidator<AuctionDates, AuctionDto> {

    @Override
    public void initialize(AuctionDates constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(AuctionDto auctionDto, ConstraintValidatorContext constraintValidatorContext) {
        return auctionDto.getStartAt().isBefore(auctionDto.getEndAt());
    }
}
