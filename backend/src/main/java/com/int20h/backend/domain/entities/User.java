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
@Table(name = "users") //authorization conflict if named "user"
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "token")
    private String externalProviderToken;

    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.MERGE},
            fetch = FetchType.EAGER)
    private Set<Bid> bids;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.MERGE})
    private Set<Auction> auctions;
}
