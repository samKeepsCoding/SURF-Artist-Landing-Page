
import './App.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import styled from '@emotion/styled'

import { Navbar, Header, Events, TestModal, News, About, Gallery, Footer} from '../src/components'

const darkTheme = createTheme({
  breakpoints: {
    values: {
      md: 1070
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#e9204f',
      main: '#ff8a00',
      dark: '#00ffa8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e9204f',
      contrastText: '#000',
    },
  },
 
  typography: {

    fontFamily: 'Montserrat',

    h1: {
      fontWeight: '60px/72px'
    },
    h2: {
      fontWeight: '45px/54px'
    },
    h3: {
      fontWeight: '34px/40px'
    },
    h4: {
      fontWeight: '27px/32px'
    },
    h5: {
      fontWeight: '23px/30px'
    },
    h6: {
      fontWeight: '20px/25px'
    },

  },


})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Navbar/>
        <Header id='home'/>
        {/* <Events id='events'/> */}
        <TestModal id='video'/>
        <News id='news'/>
        <About id='about'/>
        <Gallery id='gallery'/>
        <Footer id='contact'/>
      </ThemeProvider>
    </>
  );
}

export default App;
