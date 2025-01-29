package com.codewithprojects.Springulask_server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.codewithprojects.Springulask_server.enums.UserRole;
import com.codewithprojects.Springulask_server.entities.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String username);

    Optional<User> findByUserRole(UserRole userRole);
}
