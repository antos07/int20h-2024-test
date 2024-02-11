package com.int20h.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "", method = RequestMethod.GET)
public class ReactAppController {
    @RequestMapping(value = "/auctions/{*path}", method = RequestMethod.GET)
    public String handleAll(@PathVariable(value = "path") String path) {
        return "/";
    }
}
