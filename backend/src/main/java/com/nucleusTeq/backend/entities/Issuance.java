package com.nucleusTeq.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Table(name = "Issuances")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Issuance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;


    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "issue_at")
    private Timestamp issuedAt;

    @Column(name = "return_at")
    private Timestamp returnedAt;



    private String status;

    @Column(name = "issuance_type")

    private String issuanceType;

    // Getters and Setters



}
