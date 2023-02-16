import React from 'react';
import {Typography, Box, Card, CardActionArea, CardContent, CardMedia, useTheme, useMediaQuery} from '@mui/material';
import styled from '@emotion/styled';
import image from '../../assets/Surf4.JPG'

const Page = styled.div`
    width: 100%;
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-direction: column;
    text-align: center;
`

const ContentContainer = styled.div`
    @media( max-width: 850px){
        flex-direction: column;
        justify-content: center;
    }

    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
`



const Text = styled.div`
    width: 100%;
    border: solid
`

const MainButtonHover = styled.button`
    margin-top: 15px;
    font-family: Montserrat;
    font-weight: 800;
    border: #e9204f solid 1.5px;
    background: transparent;
    width: 230px;
    height: 49px;
    color: white;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #e9204f;
        transition: ease 0.5s;
    } 
`


const News = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const isSmallMatch = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Page id='news'>
        <Typography variant={'h2'}>LATEST NEWS </Typography>
        <ContentContainer>
            <Card sx={isMatch ? {width: '100%'} : { maxWidth: 545 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    image={image}
                    alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizards
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas laborum, earum vel in eos similique culpa dolorum iusto voluptatem voluptate quod veritatis, dolorem expedita 
                            odio minus doloribus reiciendis accusamus. Ex.
                        </Typography>
                        <MainButtonHover onClick={() => window.open('https://www.hypefresh.co/atls-s-u-r-f-releases-incredible-visuals-for-interstellar/')}>
                            READ MORE
                        </MainButtonHover>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={isMatch ? {width: '100%'} : { maxWidth: 545 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    image={image}
                    alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizards
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas laborum, earum vel in eos similique culpa dolorum iusto voluptatem voluptate quod veritatis, dolorem expedita 
                            odio minus doloribus reiciendis accusamus. Ex.
                        </Typography>
                        <MainButtonHover onClick={() => window.open('https://www.hypefresh.co/atls-s-u-r-f-releases-incredible-visuals-for-interstellar/')}>
                            READ MORE
                        </MainButtonHover>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={isMatch ? {width: '100%'} : { maxWidth: 545 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    image={image}
                    alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizards
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas laborum, earum vel in eos similique culpa dolorum iusto voluptatem voluptate quod veritatis, dolorem expedita 
                            odio minus doloribus reiciendis accusamus. Ex.
                        </Typography>
                        <MainButtonHover onClick={() => window.open('https://www.hypefresh.co/atls-s-u-r-f-releases-incredible-visuals-for-interstellar/')}>
                            READ MORE
                        </MainButtonHover>
                    </CardContent>
                </CardActionArea>
            </Card>
            
            
            
            
            
            

            
           
        </ContentContainer>
    </Page>
  )
}

export default News