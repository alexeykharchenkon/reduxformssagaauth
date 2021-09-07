import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { memo } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = memo(() => {
    return(
        <Container className="navbar">
            <AppBar position="fixed">
                <Toolbar className="toolbar">
                    <NavLink to="/" style={{textDecoration: 'none', color: '#000', marginRight: '15px'}}>
                        <Typography variant="h6">Main</Typography>
                    </NavLink> 
                    <NavLink to="/profile" style={{textDecoration: 'none', color: '#000'}}>
                        <Typography variant="h6">Profile Page</Typography>
                    </NavLink> 
                </Toolbar>
            </AppBar>
        </Container>
    );
});