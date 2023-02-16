import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AboutPic from '../../assets/Surf2.JPG'
 
const Page = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    background: #000000;
    padding: 5rem 3rem;

`

const Row = styled.div`
    @media (max-width: 1070px ) {
        flex-direction: column;
        align-items: start;
    }
    border: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin: auto;
`


const LeftContainer = styled.div`
    @media (max-width: 1070px ) {
        width: 100%;
        text-align: center;
        padding: 0;
    }
   
    align-items: center;
    text-align: end;
    max-width: 1170px;
    flex-direction: column;
    width: 50%;
    padding: 0 4rem;
    

    
`

const RightContainer = styled.div`
    @media (max-width: 1070px ) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        justify-content: center;
        height: 50%;
    }
    width: 50%;
    
    
`

const AboutImage = styled.img`
    @media (max-width: 1070px){
        max-height: 336px;
    }

    @media (max-width: 614px) {
        max-width: 200px;
        max-height: 136px;
    }

    border: 1px solid #ddd;
    border-radius: 4px;
    width: 75%;
    max-width: 536px;
    
    height: 536px;
`

const Line = styled.div`
    border-top: solid #e9204f 0.8px;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

const MainButtonHover = styled.button`

    @media ( max-width: 600px){
        width: 150px;
        font-size: 14px
    }
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

const About = () => {


  return (
    
    <Page id='about'>
       
        <Row>
            <LeftContainer>
                <GraphicEqIcon color="secondary"  sx={{ fontSize: 70}}/>
                <Typography variant='h3' style={{margin: '1rem 0'}}>ABOUT S.U.R.F</Typography>
                <Typography variant='body' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta itaque fugit obcaecati quisquam pariatur perferendis, sapiente sunt quo aspernatur, 
                minus nostrum quae, maiores impedit doloremque eius! Natus quis aspernatur ex.
                amet consectetur adipisicing elit. Dicta itaque fugit obcaecati quisquam pariatur perferendis, sapiente sunt quo aspernatur, 
                </Typography>
                <Line/>
                <MainButtonHover onClick={() => window.open('https://www.hypefresh.co/atls-s-u-r-f-releases-incredible-visuals-for-interstellar/')}>
                    READ MORE
                </MainButtonHover>
            </LeftContainer>

            <RightContainer>
                <AboutImage src={AboutPic}/>
            </RightContainer>

        </Row>
        
    </Page>
  )
}

export default About

