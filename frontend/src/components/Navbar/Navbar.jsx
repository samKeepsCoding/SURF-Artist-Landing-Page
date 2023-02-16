import React, {useState} from 'react';
import {Link as LinkScroll} from 'react-scroll';
import styled from '@emotion/styled';
import PrimaryLogo from '../../assets/primaryLogo.jpg';
import{ AppBar, Toolbar, Tabs,
     Tab, Box, IconButton, useMediaQuery, useTheme, Typography, Drawer }from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import NavbarDrawer from './NavbarDrawer'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {links} from '../../data'



const NavMenu = styled.ul`
    display: flex;
    margin-left: auto;
    list-style: none;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    
    



`

const NavItem = styled.li`
    font-weight: bold;
    font-size: 23px;
    font-family: Montserrat;
    margin-left: 2.5rem;
    color: #ffffff;
    &:hover {
        background: transparent;
        color: #e9204f;
        transition: ease 0.7s;
        }
    


`

const NavLinks = styled(LinkScroll)`
    cursor: pointer
   

`






const Navbar = () => {

    const [value, setValue] = useState()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const [openDrawer, setOpenDrawer] = useState(false)
    

  return (

    <AppBar position='fixed' sx={{background: 'black', flexGrow: 1, padding: '1rem'}}>
        <Toolbar>
            
            {isMatch ? (
                <>
                    <Box
                        component="img"
                        sx={{
                        height: 80,
                        }}
                        alt="Your logo."
                        src={PrimaryLogo}d
                    />

                    <NavbarDrawer/>

                </>
            ) : ( <>
            
                <Box
                    component="img"
                    sx={{
                    height: 80,
                    }}
                    alt="Your logo."
                     src={PrimaryLogo}
                 />

                    {/* <Tabs
                    sx={{ marginLeft: "auto" }}
                    indicatorColor='secondary'
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}  
                    
                    >

                        {links.map((link) => (
                        <Tab sx={{fontSize: '20px'}} label={link.text} to={link.url} key={link.id} component='Link'></Tab>
                        ))}

                        <Tab sx={{fontSize: '20px'}} label="Merch" onClick={() => setOpenDrawer(true)} />

                    </Tabs> */}

                <NavMenu>
                    <NavItem>
                        <NavLinks to='home' spy={true} smooth={true} offset={-185} duration={1300}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about' spy={true} smooth={true} offset={-185} duration={1300}>About</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='events' spy={true} smooth={true} offset={-175} duration={1300}>Events</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinks to='videos' spy={true} smooth={true} offset={-85} duration={1300}>Videos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={() => setOpenDrawer(true)}>Merch</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='gallery' spy={true} smooth={true} offset={-80} duration={1300}>Gallery</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' spy={true} smooth={true} offset={-185} duration={1300}>Contact</NavLinks>
                    </NavItem>
                    
                </NavMenu>


                   
                    





 
             <IconButton sx={{ marginLeft: "auto" }} onClick={() => window.open('https://www.instagram.com/oksurf/?igshid=YmMyMTA2M2Y%3D')}>
                 <InstagramIcon/>
             </IconButton>
 
             <IconButton onClick={() => window.open('https://twitter.com/ohthatssurf?s=11&t=no_Rlpm8ozJSy9FONS0iqA')} >
                 <TwitterIcon fontSize='medium'/>
             </IconButton>

             <IconButton onClick={() => window.open('https://www.youtube.com/channel/UC6myq5CMxn15rgbheJsduAw/featured')} >
                    <YouTubeIcon fontSize='medium'/>
                </IconButton>
            </>
            )}
            <Drawer
            open={openDrawer}
            anchor='top'
            onClose={() => setOpenDrawer()}
            PaperProps={{
    
                sx: {
                  width: '100%',
                  height: '50vh',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#000000'
                }
              }}
        >
            <Typography variant='h1'>COMING SOON . . .</Typography>
        </Drawer>
            </Toolbar>
    </AppBar>
  )
}

export default Navbar