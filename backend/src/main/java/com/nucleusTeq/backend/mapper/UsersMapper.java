package com.nucleusTeq.backend.mapper;

import com.nucleusTeq.backend.dto.UsersDTO;
import com.nucleusTeq.backend.entities.Users;

public class UsersMapper {

    // Private constructor to prevent instantiation
    private UsersMapper() {
    }

    // Method to map from Users entity to UsersDTO
    public static UsersDTO mapToUsersDTO(Users users) {
        UsersDTO usersDTO = new UsersDTO();
        usersDTO.setId(users.getId());
        usersDTO.setName(users.getName());
        usersDTO.setEmail(users.getEmail());
        usersDTO.setPhoneNumber(users.getPhoneNumber());
        usersDTO.setRole(users.getRole());
        usersDTO.setPassword(users.getPassword());
        return usersDTO;
    }

    // Method to map from UsersDTO to Users entity
    public static Users mapToUsers(UsersDTO usersDTO) {
        Users users = new Users();
        users.setId(usersDTO.getId());
        users.setName(usersDTO.getName());
        users.setEmail(usersDTO.getEmail());
        users.setPhoneNumber(usersDTO.getPhoneNumber());
        users.setRole(usersDTO.getRole());
        users.setPassword(usersDTO.getPassword());
        return users;
    }
}
