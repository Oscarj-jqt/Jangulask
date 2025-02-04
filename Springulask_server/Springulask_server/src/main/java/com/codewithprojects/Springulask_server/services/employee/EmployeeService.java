package com.codewithprojects.Springulask_server.services.employee;

import com.codewithprojects.Springulask_server.dto.TaskDTO;

import java.util.List;

public interface EmployeeService {

    List<TaskDTO> getTasksByUserId();
}
