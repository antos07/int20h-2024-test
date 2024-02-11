package com.int20h.backend.controllers;

import com.int20h.backend.domain.dtos.BidDto;
import com.int20h.backend.services.serviceimpls.BidService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bid")
@Validated
public class BidController {
    private final BidService bidService;

    @PostMapping
    public void save(@Valid @RequestBody BidDto dto) {
        bidService.save(dto);
    }

//    @DeleteMapping("/{id}")
//    public void delete(@Valid @NotNull @PathVariable("id") UUID id) {
//        bidService.delete(id);
//    }

//    @PutMapping("/{id}")
//    public void update(@Valid @NotNull @PathVariable("id") UUID id,
//                       @Valid @RequestBody BidDto dto) {
//        bidService.update(id, dto);
//    }

    @GetMapping("/{id}")
    public BidDto getById(@Valid @NotNull @PathVariable("id") UUID id) {
        return bidService.getById(id);
    }

    @GetMapping("/getAll")
    public List<BidDto> getAll() {
        return bidService.getAll();
    }
}
