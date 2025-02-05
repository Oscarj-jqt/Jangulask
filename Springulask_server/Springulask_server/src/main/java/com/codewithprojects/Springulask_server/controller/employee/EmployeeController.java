package com.codewithprojects.Springulask_server.controller.employee;


import com.codewithprojects.Springulask_server.dto.TaskDTO;
import com.codewithprojects.Springulask_server.services.employee.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<TaskDTO>> getTasksByUserId(){
        return ResponseEntity.ok(employeeService.getTasksByUserId());
    }


    @GetMapping("/task/{id}/{status}")
    public ResponseEntity<TaskDTO> updateTask(@PathVariable Long id, @PathVariable String status) {
        TaskDTO updatedTaskDTO = employeeService.updateTask(id, status);
        if(updatedTaskDTO == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedTaskDTO);
    }
}
