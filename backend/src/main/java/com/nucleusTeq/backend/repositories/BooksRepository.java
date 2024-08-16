package com.nucleusTeq.backend.repositories;

import com.nucleusTeq.backend.entities.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Books,Long> {
}
