package com.int20h.backend.domain.entities;

import com.int20h.backend.domain.AuctionStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "auction")
public class Auction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "auction", cascade = {CascadeType.MERGE, CascadeType.REMOVE})
    private Set<Bid> bids;

    private String title;
    private String description;

    @Lob
    @Basic(fetch = FetchType.LAZY)

    private byte[] photo;
    private AuctionStatus status;

    @Column(name = "min_offer")
    private float minOffer;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "start_at")
    private LocalDateTime startAt;

    @Column(name = "end_at")
    private LocalDateTime endAt;

    public void addAuction(@NotNull User user) {
        this.user = user;

        user.getAuctions().add(this);
    }

    public void removeAuction() {
        this.user.getAuctions().add(this);
    }
}
