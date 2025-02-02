package com.codewithprojects.Springulask_server.repositories;


import com.codewithprojects.Springulask_server.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
}
