package com.codewithprojects.Springulask_server.services.admin;

import com.codewithprojects.Springulask_server.dto.TaskDTO;
import com.codewithprojects.Springulask_server.dto.UserDto;
import com.codewithprojects.Springulask_server.entities.Task;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();

     TaskDTO createTask(TaskDTO taskDTO);

     List<TaskDTO> getAllTasks();

     void deleteTask(Long id);

     TaskDTO getTaskById(Long id);

     TaskDTO updateTask(Long id, TaskDTO taskDTO);

     List<TaskDTO> searchTaskByTitle(String title);
}
