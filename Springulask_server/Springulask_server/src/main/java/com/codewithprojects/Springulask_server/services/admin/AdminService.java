package com.codewithprojects.Springulask_server.services.admin;

import com.codewithprojects.Springulask_server.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();
}
