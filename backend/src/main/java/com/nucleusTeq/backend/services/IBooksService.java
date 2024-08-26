package com.nucleusTeq.backend.services;


import com.nucleusTeq.backend.dto.BooksDTO;

import java.util.List;

public interface IBooksService {

      String createBook(List<BooksDTO> booksDTOList);

      String deleteBook(Long id);

      String updateBook(Long id , BooksDTO booksDTO);

      List<BooksDTO> getBooks();
}
