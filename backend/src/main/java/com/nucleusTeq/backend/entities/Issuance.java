package com.nucleusTeq.backend.entities;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Issuances")
public class Issuance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Books book;

    @Column(name = "issued_at", nullable = false)
    private Timestamp issuedAt;

    @Column(name = "returned_at")
    private Timestamp returnedAt;

    @Column(name = "status", nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "issuance_type", nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private IssuanceType issuanceType;

    // Getters and Setters

    public enum Status {
        ISSUED, RETURNED
    }

    public enum IssuanceType {
        HOME, LIBRARY
    }

}
