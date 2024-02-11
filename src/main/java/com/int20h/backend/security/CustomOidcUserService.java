package com.int20h.backend.security;

import com.int20h.backend.domain.entities.User;
import com.int20h.backend.services.serviceimpls.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOidcUserService extends OidcUserService {
    private final UserService userService;

    @Override
    public OidcUser loadUser(OidcUserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OidcUser oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OidcUser processOAuth2User(OidcUserRequest oAuth2UserRequest, OidcUser oAuth2User) {
        UserInfo parser = new GoogleUserInfo(oAuth2User.getAttributes());


        User userOptional = userService.requireOneToken(parser.getToken());
        if (userOptional == null) {
            userService.save(parser.getDto());
        }
//        else {
//            userService.update(userOptional.getId(), parser.getDto());
//        }

        return oAuth2User;
    }
}