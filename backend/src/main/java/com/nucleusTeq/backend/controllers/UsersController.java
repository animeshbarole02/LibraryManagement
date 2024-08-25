package com.nucleusTeq.backend.controllers;

import com.nucleusTeq.backend.dto.LoginDTO;
import com.nucleusTeq.backend.dto.UsersDTO;
import com.nucleusTeq.backend.jwt.JwtUtils;
import com.nucleusTeq.backend.jwt.LoginResponse;
import com.nucleusTeq.backend.services.IUsersService;
import com.nucleusTeq.backend.services.Impl.UsersServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "api/v1/users")


public class UsersController {


    @Autowired
    private IUsersService iUsersService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

 @PostMapping("/signin")
 public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginDTO) {

     Authentication authentication;

     try {

         System.out.println("In Comtroller");

         authentication = authenticationManager
                 .authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(),loginDTO.getPassword()));



     }catch (Exception e ) {

         Map<String,Object> map =  new HashMap<>();
         map.put("Messsage", "Bad credentials");
         map.put("status",false);
         return  new ResponseEntity<Object>(map,HttpStatus.NOT_FOUND);



     }

     SecurityContextHolder.getContext().setAuthentication(authentication);

     UserDetails userDetails = (UserDetails) authentication.getPrincipal();

     String jwtToken = jwtUtils.generateTokenFromUsername(userDetails);

     System.out.println(jwtToken);
     LoginResponse response = new LoginResponse(jwtToken,userDetails.getUsername());

     return ResponseEntity.ok(response);

 }


  @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<String> createUser(@RequestBody UsersDTO usersDTO){

        System.out.println("Create");
         String response = iUsersService.createUser(usersDTO);

        return  ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UsersDTO>> getAllUsers() {



        System.out.println("I");
        List<UsersDTO> usersList = iUsersService.getAllUsers();
        return ResponseEntity.status(HttpStatus.OK).body(usersList);
    }

    @GetMapping("/{id}")

    public  ResponseEntity<UsersDTO> getUserById(@PathVariable Long id) {
        UsersDTO user  =  iUsersService.getUserById(id);

        return  ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsersDTO> updateUser(@PathVariable Long id, @RequestBody UsersDTO usersDTO) {
        UsersDTO updatedUser =iUsersService.updateUser(id, usersDTO);
        return  ResponseEntity.status(HttpStatus.OK).body(updatedUser);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        String response = iUsersService.deleteUser(id);
        return  ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
