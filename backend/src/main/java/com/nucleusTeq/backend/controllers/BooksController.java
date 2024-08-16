package com.nucleusTeq.backend.controllers;

import com.nucleusTeq.backend.dto.BooksDTO;
import com.nucleusTeq.backend.services.IBooksService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/books")
public class BooksController {


    private  final IBooksService iBooksService;


    public BooksController(IBooksService booksService) {
        this.iBooksService = booksService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createBook(@RequestBody BooksDTO booksDTO){

        String message = iBooksService.createBook(booksDTO);

        return  ResponseEntity.status(HttpStatus.CREATED).body(message);

    }

    @PutMapping("/update/{id}")
    public  ResponseEntity<String> updateBook(@PathVariable Long id , @RequestBody BooksDTO booksDTO) {

         String message  = iBooksService.updateBook(id,booksDTO);
        return ResponseEntity.status(HttpStatus.OK).body(message);


    }

    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<String> deleteBook(@PathVariable Long id) {
        String message = iBooksService.deleteBook(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }

    @GetMapping("/getBooks")
    public  ResponseEntity<List<BooksDTO>> getBooks() {
        List<BooksDTO> booksDTOList = iBooksService.getBooks();
        return ResponseEntity.status(HttpStatus.OK).body(booksDTOList);
    }
}
