package com.int20h.backend.controllers;

import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.services.serviceimpls.BidService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;

@Controller
@Validated
@RequiredArgsConstructor
public class BidSocketController {
    private final BidService bidService;

    @MessageMapping("/saveBid")
    @SendTo("/topic/bidActivity")
    public BidDto greeting(@Valid BidDto bid){
        return bidService.save(bid);
    }
}
