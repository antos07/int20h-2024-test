import {Outlet, Link as RouterLink} from "react-router-dom";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import {Container, Link, Paper, styled} from "@mui/material";
import {green, grey} from "@mui/material/colors";

export function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{
                boxShadow: 3,
                borderBottom: 3,
                borderRadius: '16px',
                borderColor: 'primary.dark',
                bgcolor: grey[50],
                position: 'fixed',
                top: 0,
                zIndex: 100
            }}
            >
                <Toolbar disableGutters>
                    <Link variant="h5"
                          component={RouterLink}
                          to="/"
                          sx={{
                              flexGrow: 1,
                              ml: "50px",
                              fontFamily: "Roboto",
                              fontStyle: "Italic",
                              textDecoration: 'none',
                              color: 'primary.strongDark',
                          }}
                    >
                        CharityAuctions
                    </Link>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                sx={{
                                    mr: '60px',
                                    color: 'primary.strongDark'
                                }}
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleChange}>Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                    {!auth && (
                        <Button color="inherit"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    border: 1,
                                    borderRadius: '10px',
                                    borderColor: green[300],
                                    mr: '60px',
                                    fontSize: 13,
                                    boxShadow: 3,
                                    fontFamily: "Roboto",
                                }}>Log in</Button>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const GradientFooter = styled(
    Paper,
)(() => ({
    width: '100%',
    bottom: 0,
    background: 'linear-gradient(to bottom right, #E8FFEF, #4EB66D 90%)',
}));


export function Footer() {
    return (
        <GradientFooter component="footer" square variant="outlined" sx={{mt: 5}}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Created by "Comming soon". All rights reserved ©2024.
                    </Typography>
                </Box>
            </Container>
        </GradientFooter>
    );
}


export const Auctions = () => (
    <>
        <MenuAppBar/>
        <Container sx={{minHeight: '86vh', mt: '80px'}}>
            <Outlet/>
        </Container>
        <Footer/>
    </>
)