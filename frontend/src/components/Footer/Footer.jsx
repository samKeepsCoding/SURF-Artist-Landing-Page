import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography, IconButton } from '@mui/material';
import Logo from '../../assets/primaryLogo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Page = styled.div`
    width: 100%;
    padding: 2rem 1rem;

    display: flex;
    justify-content: center;
    background: #000000;
    flex-direction: column;
    
`

const ContentContainer = styled.div`
    flex-direction: column;

    display: flex;
    justify-content: center;
    align-items: center;
`

const SocialContaner = styled.div`

    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

const TextContainer = styled.div`
    width: 40%;
    text-align: center;
    margin-top: 1rem;

`

const Red = styled.span`
    color: #e9204f
`

const Footer = () => {


  return (
    <>
        <Page id='contact'>
            <ContentContainer>
            <Box
                component="img"
                sx={{
                height: 100,
                }}
                alt="Your logo."
                src={Logo}
            />

                <Typography variant='h5' >S.U.R.F</Typography>
                <Typography variant='body' sx={{fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '26px'}}>2022 East Atlanta, Ga</Typography>
                <Typography variant='body'>M | mgmt4surf@gmail.com</Typography>

                <SocialContaner>

                <IconButton sx={{ marginLeft: "auto" }} onClick={() => window.open('https://www.instagram.com/oksurf/?igshid=YmMyMTA2M2Y%3D')}>
                    <InstagramIcon/>
                </IconButton>
    
                <IconButton onClick={() => window.open('https://twitter.com/ohthatssurf?s=11&t=no_Rlpm8ozJSy9FONS0iqA')} >
                    <TwitterIcon fontSize='medium'/>
                </IconButton>
                <IconButton onClick={() => window.open('https://www.youtube.com/channel/UC6myq5CMxn15rgbheJsduAw/featured')} >
                    <YouTubeIcon fontSize='medium'/>
                </IconButton>
                </SocialContaner>

                <TextContainer>
                    <Typography variant='body'>@S.U.R.F. All Rights Reserved 2022. Licensing. Designed By <Red>Samuel Harris</Red></Typography>
                </TextContainer>

            </ContentContainer>

            



           

        </Page>
    </>
  )
}

export default Footer