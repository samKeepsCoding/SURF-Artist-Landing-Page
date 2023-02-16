import React from 'react';
import {useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Container, Typography, Box, Grid, Paper, Link, useTheme, useMediaQuery } from '@mui/material';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// import sanityClient from '../../client';


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: background: #0e0e0e;
    padding: 2rem 1rem;
    marigin: auto;
    flex-direction: column;
`

const Line = styled.div`
    border-top: solid #e9204f 0.8px;
    height: 70px;
    width: 35%;
    margin-top: .8rem;
`
const MainButtonHover = styled.button`
    font-family: Montserrat;
    font-weight: 800;
    border: #e9204f solid 2.5px;
    background: transparent;
    width: 100%;
    
    color: white;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    padding: 2rem 4rem;
    &:hover {
        background: #e9204f;
        transition: ease 0.5s;
    } 
`

const Date = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #222222;
`

const CityAndVenue = styled.div`
    display: flex;
    width: 100%;
    background-color: #0e0e0e ;
    text-align: center;
    justify-content: center;
    padding: 1rem;
    align-items: center;
`

const BuyButton = styled.button`
    font-family: Montserrat;
    font-weight: 800;
    border: #e9204f solid 2.5px;
    background: transparent;
    width: 330px;
    height: 70px;
    color: white;
    font-size: 19px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #e9204f;
        transition: ease 0.5s;
    } 
`




const Events = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

    const [allEventData, setAllEventData] = useState(null)
   

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*[_type == 'event']{
    //             venue,
    //             city,
    //             state,
    //             eventDate,
    //             href,
    //         }`
    //     )
    //     .then(data => {setAllEventData(data)
    //     }).catch(err => console.error(err))
    // }, [])


    return (
        <Page id='events'>

                <GraphicEqIcon color="secondary" sx={{ fontSize: 80 }}/>

                <Box mt={5} 
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'}}
                >
                    <Typography variant={isMatch ? 'h4' : 'h3'}> 
                        UPCOMING DATES
                    </Typography>

                    <Line/>

                </Box>

                {isMatch ? (
                   allEventData && allEventData.map((event, index) => (
                    <>
                    
                        <Date>
                            <Typography variant='h5'>{`${event.eventDate.slice(5).replace("-", "/")}`}</Typography>
                        </Date>

                        <CityAndVenue>
                            <Typography variant='h6' fontSize={16}>{`${event.city}, ${event.state}`}</Typography>
                        </CityAndVenue>
                        <CityAndVenue>
                            <Typography variant='h6' >{event.venue.toUpperCase()}</Typography>
                        </CityAndVenue>
                        <CityAndVenue>
                            <BuyButton style={{marginBottom: '1rem'}}>
                                RSVP / BUY TICKETS
                            </BuyButton>
                        </CityAndVenue>
                    </>

                    ))


                ): 
                <>
                    {allEventData && allEventData.map((event, index) => (

                            <Grid key={index} container spacing={2}
                            sx={{
                                maxWidth: '100%',
                                marginTop: '0px',
                                display: 'flex',
                                justifyContent: 'center' ,
                                padding: '0 5rem'
                            }}>
                        
                                <Grid  item sm={12} md={3}>
                                    <Paper sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        background: '#222222',
                                        alignItems: 'center',
                                        height: '75px',
                                        padding: '3rem 1rem'
                                    }}>
                                        <Typography variant='h5'>{`${event.eventDate.slice(5).replace("-", "/")}`}</Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} md={6} >
                                    <Paper sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                        padding: '3rem 5rem',
                                        background: '#222222',
                                        height: '75px',
                                    }}>
                                        <Typography variant='h6'>{`${event.city}, ${event.state}`}</Typography>
                                        <Typography variant='h6' marginLeft='1rem'>{event.venue}</Typography>
                                    </Paper>
                                </Grid>

                                <Grid item sm={12} md={3} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                                    
                                        <MainButtonHover>
                                            <a href={event.href}
                                            style={
                                                {textDecoration: 'none',
                                                color: 'white'
                                            }}>
                                                Buy Ticket</a>
                                        </MainButtonHover>
                                    
                                </Grid>

                            </Grid>
                                ))}

                    </>
                    }
                      

                        <Link
                        color='secondary'
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{marginTop: '3rem'}}
                        >
                        See More Dates
                        </Link>
                       
                        
                    
           
        </Page>
  )
}

export default Events