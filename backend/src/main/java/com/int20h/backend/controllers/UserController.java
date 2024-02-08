package com.int20h.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/")
    public String test(){
        return "cringe has been logged in/out and redirected to home page";
    }
}
