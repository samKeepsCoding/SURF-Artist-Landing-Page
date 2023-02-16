import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';

// import sanityClient from '../../client';
import Surf1 from '../../assets/Surf1.jpg'
import Surf2 from '../../assets/Surf2.JPG'
import Surf3 from '../../assets/Surf3.JPG'
import Surf4 from '../../assets/Surf4.JPG'



const Page = styled.div`
    @media(max-width: 768px){
        padding: 1rem 0;
    }
    @media(max-width: 568px){
        padding: 0;
        border-radius: 0;
    }
    width: 100%;
    background: #B00000;
    padding: 3rem 5rem 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    @media(max-width: 568px){
        padding: 1rem;
        border-radius: 0;
    }
    background: #000000;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    box-shadow: 20px 15px 25px 11px black;
    border: solid 0.3px #0e0e0e;

`

const PicGridItem = styled.img`
    max-height: 100%;
    max-width: 100%;
    
`



const Gallery = () => {
    const [galleryImages,setGalleryImages] = useState(null)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const isSmallMatch = useMediaQuery(theme.breakpoints.down('lg'))

    

  return (
    <Page id='gallery'>
        <ContentContainer>
            <ImageList
                sx={{ width: '100%', height: '100%', padding: '0 1rem'}}
                variant="quilted"
                cols={isMatch || isSmallMatch ? 2 : 4}
                rowHeight={isMatch || isSmallMatch ? 100 : 121}
                gap={9}
                
            >
                <ImageListItem rows={3} cols={2}>
                    <img src={Surf1} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>
                <ImageListItem rows={3} cols={1}>
                    <img src={Surf2} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>
                <ImageListItem rows={3} cols={1}>
                    <img src={Surf3} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>
                <ImageListItem rows={3} cols={1}>
                    <img src={Surf4} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>
                <ImageListItem rows={3} cols={1}>
                    <img src={Surf2} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>
                <ImageListItem rows={3} cols={2}>
                    <img src={Surf2} alt="" style={{objectFit: 'cover'}} />
                </ImageListItem>

            </ImageList>
        

        </ContentContainer>
    </Page>
  )
}

export default Gallery