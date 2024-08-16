package com.nucleusTeq.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {


    private Long id;

    @NotEmpty(message = "Category name cannot be Empty")
    private String name;





    // Getters and Setters (optional)
}
