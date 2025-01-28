package com.codewithprojects.Springulask_server.dto;


import lombok.Data;

@Data
public class SignupRequest {


    private String name;

    private String email;

    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CharSequence getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
