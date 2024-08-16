package com.nucleusTeq.backend.controllers;

import com.nucleusTeq.backend.dto.UsersDTO;
import com.nucleusTeq.backend.services.Impl.UsersServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/users")


public class UsersController {


    @Autowired
    private final UsersServiceImp usersServiceImp;

    public UsersController(UsersServiceImp usersServiceImp) {
        this.usersServiceImp = usersServiceImp;
    }

    @PostMapping("/save")

    public ResponseEntity<String> createUser(@RequestBody UsersDTO usersDTO){
         String response = usersServiceImp.createUser(usersDTO);

        return  ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UsersDTO>> getAllUsers() {
        List<UsersDTO> usersList = usersServiceImp.getAllUsers();
        return ResponseEntity.status(HttpStatus.OK).body(usersList);
    }

    @GetMapping("/{id}")

    public  ResponseEntity<UsersDTO> getUserById(@PathVariable Long id) {
        UsersDTO user  =  usersServiceImp.getUserById(id);

        return  ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsersDTO> updateUser(@PathVariable Long id, @RequestBody UsersDTO usersDTO) {
        UsersDTO updatedUser = usersServiceImp.updateUser(id, usersDTO);
        return  ResponseEntity.status(HttpStatus.OK).body(updatedUser);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        String response = usersServiceImp.deleteUser(id);
        return  ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
