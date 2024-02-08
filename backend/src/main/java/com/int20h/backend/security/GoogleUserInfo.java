package com.int20h.backend.security;

import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public class GoogleUserInfo extends UserInfo {

    private Map<String, Object> attributes;

    @Override
    public String getToken() {
        System.out.println(attributes);
        return attributes.get("sub").toString();
    }

    @Override
    public String getName() {
        return attributes.get("name").toString();
    }

    @Override
    public String getEmail() {
        return attributes.get("email").toString();
    }

    @Override
    public String getProvider() {
        return "google";
    }
}