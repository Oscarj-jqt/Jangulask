package com.codewithprojects.Springulask_server.services.admin;

import com.codewithprojects.Springulask_server.dto.TaskDTO;
import com.codewithprojects.Springulask_server.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();

     TaskDTO createTask(TaskDTO taskDTO);

     List<TaskDTO> getAllTasks();

     void deleteTask(Long id);
}
