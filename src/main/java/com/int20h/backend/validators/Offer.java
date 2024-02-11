package com.int20h.backend.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = OfferValidator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Offer {
    String message() default "The offer is too small!";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
