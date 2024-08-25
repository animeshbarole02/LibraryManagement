package com.nucleusTeq.backend.controllers;



import com.nucleusTeq.backend.dto.CategoryDTO;
import com.nucleusTeq.backend.entities.Category;
import com.nucleusTeq.backend.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/categories")
public class CategoryController {


    @Autowired
    private  ICategoryService iCategoryService;



   @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<List<CategoryDTO>> fetchCategories(){

        List<CategoryDTO> categoryDTOList = iCategoryService.fetchCategories();

        return ResponseEntity.status(HttpStatus.OK).body(categoryDTOList);
    }

    @CrossOrigin
    @PostMapping(path = "/save")
    public ResponseEntity<String> createCategories(@RequestBody List<CategoryDTO> categoryDTOList){

        String message =iCategoryService.saveCategories(categoryDTOList);

        return  ResponseEntity.status(HttpStatus.CREATED).body(message);

    }


    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        String message = iCategoryService.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }

    @CrossOrigin
    @GetMapping("/list")
    public Page<Category> getCategories(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size
    ){
       return  iCategoryService.getCategories(page,size);
    }
}
