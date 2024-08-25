package com.nucleusTeq.backend.services;


import com.nucleusTeq.backend.dto.CategoryDTO;
import com.nucleusTeq.backend.entities.Category;
import org.springframework.data.domain.Page;


import java.util.List;


public interface ICategoryService {

     List<CategoryDTO> fetchCategories();

     String saveCategories(List<CategoryDTO> categoryDTOS);

     Page<Category> getCategories(int page , int size);

     String deleteCategory(Long id);
}
