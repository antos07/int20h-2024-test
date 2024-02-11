package com.int20h.backend.config;

import com.int20h.backend.security.CustomOidcUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    private final CustomOidcUserService googleService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()
                //.cors().disable()
                //.and()
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/resources/**", "/", "/index.html").permitAll();
                    auth.anyRequest().authenticated();
                })
                .logout()
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/")
                    .deleteCookies()
                .and()
                .oauth2Login()
                    .userInfoEndpoint()
                    .oidcUserService(googleService)
                    .and()
                    .defaultSuccessUrl("/")
                .and()
                .formLogin()
                    .loginPage("/login")
                    .successForwardUrl("/")
                .and()
                .build();
    }
}
