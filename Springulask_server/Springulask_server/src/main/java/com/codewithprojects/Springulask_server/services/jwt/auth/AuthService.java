package com.codewithprojects.Springulask_server.services.jwt.auth;

import com.codewithprojects.Springulask_server.dto.SignupRequest;
import com.codewithprojects.Springulask_server.dto.UserDto;

public interface AuthService {

    UserDto signupUser(SignupRequest signupRequest);

    boolean hasUserWithEmail(String email);
}
