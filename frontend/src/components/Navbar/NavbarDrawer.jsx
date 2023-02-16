import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import styled from '@emotion/styled'
import {Link as LinkScroll} from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {links} from '../../data'


const NavItem = styled.li`
    font-weight: bold;
    font-size: 20px;
    font-family: Montserrat;
    color: #ffffff;
    padding: 1rem 0;
    &:hover {
        background: transparent;
        color: #e9204f;
        transition: ease 0.7s;
        }

`

const NavLinks = styled(LinkScroll)`
    cursor: pointer
   

`


const NavbarDrawer = () => {
    const pages = ['HOME', 'ABOUT', 'GALLERY', 'MERCH', 'VIDEO', 'CONTACT']
    const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <>
        <Drawer 
        open={openDrawer}
        anchor='left'
        onClose={() => setOpenDrawer(false)}
        PaperProps={{

            sx: {
              width: 240
            }
          }}
        >
            <List component={"nav"} >
                {links.map((link, index) => (

                <ListItemButton key={index}>
                    <ListItemIcon >
                        {/* <ListItemText fontSize='26px' primary={page} ></ListItemText> */}
                        <NavItem>
                          <NavLinks to={link.url} spy={true} smooth={true} offset={0} duration={1300} onClick={() => {setOpenDrawer(!openDrawer)}}>{link.text}</NavLinks>
                      </NavItem>
                    </ListItemIcon>
                </ListItemButton>
                ))}
            <IconButton sx={{ marginTop: 'auto' }} onClick={() => window.open('https://www.instagram.com/oksurf/?igshid=YmMyMTA2M2Y%3D')}>
                 <InstagramIcon/>
             </IconButton>
 
             <IconButton onClick={() => window.open('https://twitter.com/ohthatssurf?s=11&t=no_Rlpm8ozJSy9FONS0iqA')} >
                 <TwitterIcon fontSize='medium'/>
             </IconButton>

             <IconButton onClick={() => window.open('https://www.youtube.com/channel/UC6myq5CMxn15rgbheJsduAw/featured')} >
                    <YouTubeIcon fontSize='medium'/>
                </IconButton>
            </List>

        </Drawer>

       <IconButton
            sx={{color: "white", marginLeft: "auto"}}
            onClick={()=> setOpenDrawer(!openDrawer)}
        >
            <MenuIcon color="white" fontSize='large'/>

       </IconButton>

    </>
  )
}

export default NavbarDrawer