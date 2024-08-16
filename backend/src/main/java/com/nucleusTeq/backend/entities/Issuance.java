package com.nucleusTeq.backend.entities;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Issuances")
public class Issuance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long user;


    @Column(name = "book_id")
    private Long book;

    @Column(name = "issue_at")
    private Timestamp issuedAt;

    @Column(name = "return_at")
    private Timestamp returnedAt;



    private String status;

    @Column(name = "issuance_type")

    private String issuanceType;

    // Getters and Setters



}
