package com.int20h.backend.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = AuctionDatesValidator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface AuctionDates {
    String message() default "Invalid auction dates!";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
