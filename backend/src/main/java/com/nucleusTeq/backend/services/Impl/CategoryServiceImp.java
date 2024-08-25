package com.nucleusTeq.backend.services.Impl;


import com.nucleusTeq.backend.dto.CategoryDTO;
import com.nucleusTeq.backend.entities.Category;
import com.nucleusTeq.backend.mapper.CategoryMapper;
import com.nucleusTeq.backend.repositories.CategoryRepository;
import com.nucleusTeq.backend.services.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CategoryServiceImp implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryDTO> fetchCategories() {

        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOList = new ArrayList<>();

        categories.forEach(category ->
                categoryDTOList.add(CategoryMapper.mapToCategoryDTO(category))
        );

        return  categoryDTOList;

    }

    @Override

    public  String saveCategories(List<CategoryDTO> categoryDTOList)
    {
        List<Category> categories = new ArrayList<>();

        categoryDTOList.forEach(categoryDTO -> {
            categories.add(CategoryMapper.maptoCategory(categoryDTO));
        });

        List<Category> savedCategories =  categoryRepository.saveAll(categories);

        return  savedCategories.size() + "Categories are added";
    }




    @Override
    public String deleteCategory(Long id){
        categoryRepository.deleteById(id);
        return "Category deleted successfully with ID: " + id;
    }

    @Override
    public Page<Category> getCategories(int page , int size) {
        Pageable pageable = PageRequest.of(page,size);
        return  categoryRepository.findAll(pageable);
    }


}
