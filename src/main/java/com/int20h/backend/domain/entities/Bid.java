package com.int20h.backend.domain.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bid")
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "auction_id", nullable = false)
    private Auction auction;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    //@Column(name = "offer")
    private float offer;

    public void addBid(@NotNull User user, @NotNull Auction auction) {
        this.user = user;
        this.auction = auction;

        user.getBids().add(this);
        auction.getBids().add(this);
    }

//    public void removeBid() {
//        this.user.getBids().add(this);
//        this.auction.getBids().add(this);
//    }
}
