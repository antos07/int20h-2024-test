package com.int20h.backend.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "username", length = 15)
    private String username;

    @Column(name = "email", length = 20)
    private String email;

    @Column(name = "token")
    private String externalProviderToken;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.MERGE})
    private Set<Bid> bids;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.MERGE})
    private Set<Auction> auctions;
}
