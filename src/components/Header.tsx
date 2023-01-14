import React, { useState } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import logoimage from "../assets/images/Logo.jpg";
import { width } from "@mui/system";

const navItems = ["HOME", "ABOUT", "CLASSES", "CONTACT", "THE BRIDGE"];

const NavBarItem = ({
  item,
  onCloseNavMenu,
}: {
  item: string;
  onCloseNavMenu: () => void;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Link
      key={item}
      onClick={onCloseNavMenu}
      color= 'text.disabled'                  
      fontWeight= "bold"             
      
      sx={{
        pl: { xs: 2, sm: 3, md: 5 },
        fontSize: { xs: 10, md: 11 },
        cursor: 'pointer',
        "&:hover": {							
          color: "#000"
        },
      }}
      underline="none"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {item} 
    </Link>
    
  );
};



export default function Header() {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isHover, setIsHover] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsHover(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="transparent"
        sx={{
          position: "relative",
          color: "#000000",
          boxShadow: "0 0 11px 8px rgb(0 0 0 / 5%)",
          textTransform: "capitalize",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
          <Toolbar disableGutters sx={{ height: '112px', px: { xl: 0 } }}>
            <Link variant="h6" sx={{ flexGrow: 1 }}>
              <Box component="img" alt="logo" src={logoimage} />
            </Link>
            
            <Box sx={{ fontFamily: "Helvetica Neue, Arial, sans-serif", height: '100%', display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <NavBarItem
                  key={item}
                  item={item}
                  onCloseNavMenu={handleCloseNavMenu}
                />                
              ))}
            </Box>

            {/* item mobile menu */}
            <Box sx={{ fontFamily: "Helvetica Neue, Arial, sans-serif", height: '100%', display: { xs: "flex", md: "none" }, alignItems: 'start' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  // display: { xs: "flex", md: "none" },
                  // pr: "0px",
                  
                }}
              >
                <MenuIcon />
              </IconButton>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}              
                // keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                color= 'text.disabled'
                
                sx={{
                  display: { xs: "flex", md: "none" },
                  ml: "-40px",
                  cursor: 'pointer',
                  
                  "&:hover": {							
                    color: "#000"
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography textAlign="left" textTransform="uppercase" fontSize={"16px"} fontWeight={"700"} color={"text.disabled"} 
                    sx={{                    
                      
                      "&:hover": {							
                        color: "#000"
                      },
                    }}>
                      {item}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
