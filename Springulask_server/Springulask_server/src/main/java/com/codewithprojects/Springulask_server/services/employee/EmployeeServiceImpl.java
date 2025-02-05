package com.codewithprojects.Springulask_server.services.employee;

import com.codewithprojects.Springulask_server.dto.TaskDTO;
import com.codewithprojects.Springulask_server.entities.Task;
import com.codewithprojects.Springulask_server.entities.User;
import com.codewithprojects.Springulask_server.repositories.TaskRepository;
import com.codewithprojects.Springulask_server.utils.JwtUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final TaskRepository taskRepository;

    private final JwtUtil jwtUtil;

    public EmployeeServiceImpl(TaskRepository taskRepository, JwtUtil jwtUtil) {
        this.taskRepository = taskRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public List<TaskDTO> getTasksByUserId() {
        User user = jwtUtil.getLoggedInUser();
        if (user != null) {
            return taskRepository.findAllByUserId(user.getId())
                    .stream()
                    .sorted(Comparator.comparing(Task::getDueDate).reversed())
                    .map(Task::getTaskDTO)
                    .collect(Collectors.toList());
        }
        throw new EntityNotFoundException("User not found");
    }

    @Override
    public TaskDTO updateTask(Long id, String status) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task existingTask = optionalTask.get();
            existingTask.setTaskStatus(mapStringToTaskStatus(status));
            return taskRepository.save(existingTask).getTaskDTO();
        }
        throw new EntityNotFoundException("Task not found");
    }
}
