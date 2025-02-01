package com.codewithprojects.Springulask_server.services.admin;

import com.codewithprojects.Springulask_server.dto.UserDto;
import com.codewithprojects.Springulask_server.entities.User;
import com.codewithprojects.Springulask_server.enums.UserRole;
import com.codewithprojects.Springulask_server.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;

    public AdminServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserDto> getUsers() {
        return userRepository.findAll()
                .stream()
                .filter(user -> user.getUserRole() == UserRole.EMPLOYEE)
                .map(User::getUserDto)
                .collect(Collectors.toList());
    }

}
