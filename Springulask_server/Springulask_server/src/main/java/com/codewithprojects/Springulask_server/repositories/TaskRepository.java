package com.codewithprojects.Springulask_server.repositories;


import com.codewithprojects.Springulask_server.dto.TaskDTO;
import com.codewithprojects.Springulask_server.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    List<Task> findAllByTitleContaining(String title);
}
