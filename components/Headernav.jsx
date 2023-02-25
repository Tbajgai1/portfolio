import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

// MUI icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AiFillFilePdf } from 'react-icons/ai';


//import css
import styles from "../styles/Home.module.css";


const pages = ['Projects', 'About Me', 'Contact'];

//Uncomment for profile on the right 
// const settings = ['FaceBook', 'LinkedIn', 'Keep in touch'];

function Headernav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={styles.headerBg}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <a href="bajgait.com">
            <Avatar className={styles.imageSize} src="logo-yellow-1.png" alt="Tulashi Bajgai" sx={{ display: { xs: 'none', md: 'flex' }, mr: 4, width: 20, height: 20 }}  />
          </a>
        
          <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu} className= {styles.menuItemsFlex}>
                  <Link className={styles.navLinksDark} href="projects.js">
                      {pages[0]} 
                  </Link>

                  <Link className={styles.navLinksDark} href="about.js">
                    {pages[1]} 
                  </Link>

                  <Link className={styles.navLinksDark} href="contact.js">
                      {pages[2]} 
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
          <a href="bajgait.com">
            <Avatar src="logo-yellow-1.png" alt="Tulashi Bajgai" sx={{ display: { xs: 'flex', justifyContent: 'center', alignItems: 'center', md: 'none' }, mr: 1, width: 150, height:70 }}  />
          </a>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={styles.marginAuto}
              >
                <Link className={styles.navLinks} href="projects.js">
                  {pages[0]} 
                </Link>
                
                <Link className={styles.navLinks} href="about.js">
                  {pages[1]} 
                </Link>
                
                <Link className={styles.navLinks} href="contact.js">
                  {pages[2]} 
                </Link>
              </Button>
          </Box>

            {/* FOR PROFILE ON THE RIGHT */}
          <Box sx={{ flexGrow: 0 }}>
            
              <IconButton sx={{ p: 0 }}>

                <Tooltip title="LinkedIn">
                  <Link href="#" className={styles.linkAlign}>
                    <LinkedInIcon className={styles.socialIcons}/>
                  </Link>
                </Tooltip>

                <Tooltip title= "GitHub">
                  <Link href="#" className={styles.linkAlign}>
                    <GitHubIcon className={styles.socialIcons}/>
                  </Link>
                </Tooltip>

                <Tooltip title= "Download Resume">
                  <Link href="#" className={styles.linkAlign}>
                    <AiFillFilePdf className={styles.socialIcons}/>
                  </Link>
                </Tooltip>

              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Headernav;