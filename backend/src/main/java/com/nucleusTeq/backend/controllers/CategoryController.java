package com.nucleusTeq.backend.controllers;



import com.nucleusTeq.backend.dto.CategoryDTO;
import com.nucleusTeq.backend.entities.Category;
import com.nucleusTeq.backend.services.ICategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/categories")
public class CategoryController {


    private  final ICategoryService iCategoryService;


    public CategoryController(ICategoryService iCategoryService) {
        this.iCategoryService = iCategoryService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CategoryDTO>> fetchCategories(){

        List<CategoryDTO> categoryDTOList = iCategoryService.fetchCategories();

        return ResponseEntity.status(HttpStatus.OK).body(categoryDTOList);
    }

    @PostMapping(path = "/saveAll")
    public ResponseEntity<String> createCategories(@RequestBody List<CategoryDTO> categoryDTOList){

        String message =iCategoryService.saveCategories(categoryDTOList);

        return  ResponseEntity.status(HttpStatus.CREATED).body(message);

    }

    @PostMapping(path = "/save")
    public  ResponseEntity<String> createCategory(@RequestBody CategoryDTO categoryDTO) {
        String message = iCategoryService.saveCategory(categoryDTO);
        return  ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        String message = iCategoryService.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }
}
