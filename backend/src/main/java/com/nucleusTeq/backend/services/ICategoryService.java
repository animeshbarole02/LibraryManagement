package com.nucleusTeq.backend.services;


import com.nucleusTeq.backend.dto.CategoryDTO;


import java.util.List;


public interface ICategoryService {

     List<CategoryDTO> fetchCategories();

     String saveCategories(List<CategoryDTO> categoryDTOS);

     String saveCategory(CategoryDTO categoryDTO);

     String deleteCategory(Long id);
}
