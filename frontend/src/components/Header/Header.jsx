import React, {useState, useEffect} from 'react';
import { Typography, Box, Button, Stack, useMediaQuery, useTheme, Collapse } from '@mui/material';
import styled from '@emotion/styled'
import HeaderImg from '../../assets/Surf5.JPG'


const Hero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${HeaderImg}), no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 70%;
    width: 100%;
    height: 100vh;
    
`;

const HeroText = styled.div`
    // border: white solid 1px;
    width: 100px
    height: 100px;
    text-align: center;
`

const Red = styled.span`
    color: #e9204f
`
const PrimaryButton = styled.button`
    background: transparent;
    color: #ffffff;
    cursor: pointer;
    paddings: 13.5px 34px;
    width: 300px;
    border: solid #ffffff .8px
`

const MainButton = styled.button`
    font-family: Montserrat;
    font-weight: 800;
    border: #e9204f solid 2.5px;
    background: transparent;
    width: 230px;
    height: 69px;
    color: white;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #e9204f;
        transition: ease 0.5s;
    }
`

const MainButtonHover = styled.button`
    font-family: Montserrat;
    font-weight: 800;
    border: #e9204f solid 2.5px;
    background: transparent;
    width: 230px;
    height: 59px;
    color: white;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #e9204f;
        transition: ease 0.5s;
    } 
`

    
const LightButton = styled.button`
    font-family: Montserrat;
    font-weight: 800;
    border: none;
    background: #ffffff;
    width: 230px;
    height: 69px;
    color: #000000 ;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    opacity: 0.89;
    &:hover {
        background: transparent;
        color:  #ffffff;
        border:  #ffffff solid 2.5px;
        transition: ease 0.5s;
        }
`





const Header = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

  return (
    <>

        <Hero id='home'>

            <Collapse 
                in={checked}
                {...(checked ? {timeout: 1000} : {} )}
                collapsedHeight={50}
            >
            
            
            <HeroText>
                <Typography variant={isMatch ? 'h3' : 'h1'} component='h1'>S.U.<Red>R</Red>.F</Typography>
            </HeroText>

            {isMatch ? (
                <Stack direction='column' spacing={4} 
                sx={{paddingTop:'20px'}}>
                    <MainButton>Buy Album</MainButton>
                    <LightButton>Play Video</LightButton>
                </Stack>
            ) :  <Stack direction='row' spacing={4} 
                sx={{paddingTop:'20px'}}>
                <MainButton>Buy Album</MainButton>
                <LightButton>Play Video</LightButton>
                </Stack>
                 }           
            </Collapse>

        </Hero>
        
    </>
  )
}

export default Header