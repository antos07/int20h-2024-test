package com.int20h.backend.controllers;

import com.int20h.backend.domain.dtos.AuctionDto;
import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.domain.dtos.UserDto;
import com.int20h.backend.services.serviceimpls.AuctionService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auction")
@Validated
public class AuctionController {
    private final AuctionService auctionService;

    @PostMapping
    public void save(@Valid @RequestBody AuctionDto dto) {
        auctionService.save(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@Valid @NotNull @PathVariable("id") UUID id) {
        auctionService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Valid @NotNull @PathVariable("id") UUID id,
                       @Valid @RequestBody AuctionDto dto) {
        auctionService.update(id, dto);
    }

    @GetMapping("/{id}")
    public AuctionDto getById(@Valid @NotNull @PathVariable("id") UUID id) {
        return auctionService.getById(id);
    }

    @GetMapping("/getAll")
    public List<AuctionDto> getAll() {
        return auctionService.getAll();
    }

    @GetMapping("/getActiveUsers/{id}")
    public List<UserDto> getActiveUsers(@NotNull @PathVariable("id") UUID id) {
        return auctionService.getActiveUsers(id);
    }

    @GetMapping("/getBidHistory/{id}")
    public List<BidDto> getBidHistory(@NotNull @PathVariable("id") UUID id) {
        return auctionService.getBidHistory(id);
    }

    @PutMapping("/close/{id}")
    public AuctionDto closeAuction(@NotNull @PathVariable("id") UUID id){
        return auctionService.closeAuction(id);
    }
}
