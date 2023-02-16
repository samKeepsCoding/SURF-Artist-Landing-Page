import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Modal, Box, Typography, useTheme, useMediaQuery} from '@mui/material'
import thumbnail1 from '../../assets/thumbnail.jpeg'





const Page = styled.div`
    @media (max-width: 800px) {
        padding: 0;
        text-align: center;
    };
    
    width: 100%;
    height: 100vh;
    background:#B00000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0 3rem 4rem;
`

const Row = styled.div`
    @media (max-width: 1068px ) {
        flex-direction: column;
        
    };
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const LeftContainer= styled.div`
    
    @media (max-width: 1070px){
        align-items: center;
        border-radius: 0;
    };

    @media(max-width: 280px){
        text-align: center;
    }
    
    display: flex;
    flex-direction: column;
    text-align: end;
    background: #000000;
    justify-content: center;
    align-items: end;
    padding: 4rem;
    box-shadow: 20px 15px 35px 11px black;
    border-top-left-radius: 20px 20px;
    border-bottom-left-radius: 20px 20px;
    z-index: 1;
    
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

const RightContainer = styled.div`
    
    min-width: 300px;
    width: 100%;
    height: 100%;
    background-image:url(${thumbnail1});
    backgroung-size: cover;
    background-position: 0% 50%;
    box-shadow: -10px 15px 55px 11px black;
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    
    bgcolor: 'transparent',
    boxShadow: '15px 20px 55px 11px #B00000',
    borderRadius: '8px',
    width: '70%',
    height: '40%',
    
  };

const ModalContainer = styled.div`
  @media (max-width: 1070px){
    width: 70%;
    height: 380px  }

  @media(max-width: 600px){
    width: 100%;
    height: 250px;
    padding: 0px;
  }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    backgound-color: transparent;
    box-shadow: 15px 20px 55px 11px #B00000;
    border-radius: 8px;


`


const TestModal = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const smallMatch = useMediaQuery(theme.breakpoints.down('sm'))
    
    
  return (
    <>
        <Page id='videos'>
            <Row>
                <LeftContainer>
                        <Typography variant='h4'>Latest Video</Typography>
                        <Typography variant='h3'>S.U.R.F</Typography>
                        <Typography variant={isMatch ? 'h5' : 'h3'}>INTERSTELLER</Typography>
                        <Typography variant='h5'>(Official Video)</Typography>
                    <MainButtonHover onClick={handleOpen} style={{margin: '1rem '}} >Watch Video</MainButtonHover>
                    <MainButtonHover style={{margin: '1rem '}} onClick={() => window.open('https://www.youtube.com/channel/UC6myq5CMxn15rgbheJsduAw/featured')} >MORE</MainButtonHover>
                </LeftContainer>
                <RightContainer>
                    
                </RightContainer>
            
                <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {/* <Box sx={style}> */}

                    <ModalContainer>


                        { isMatch ? (
                            <iframe width="100%" height="100%" margin='0px' src="https://www.youtube.com/embed/t-mgP2DYzUw" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>

                            </iframe>
                        
                        
                        ) :  (<iframe width="960" height="515" src="https://www.youtube.com/embed/t-mgP2DYzUw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" 
                        allowfullscreen
                        >
                    </iframe> )}
                    
                        
                    </ModalContainer>
                    {/* </Box> */}
                </Modal>
            </Row>
        </Page>
    </>
  )
}

export default TestModal