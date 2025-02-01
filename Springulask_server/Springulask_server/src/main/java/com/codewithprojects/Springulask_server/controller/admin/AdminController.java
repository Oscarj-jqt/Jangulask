package com.codewithprojects.Springulask_server.controller.admin;


import com.codewithprojects.Springulask_server.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    @GetMapping("/users")
    public ResponseEntity<?> getUsers(){
         return ResponseEntity.ok(adminService.getUsers());
    }
}
