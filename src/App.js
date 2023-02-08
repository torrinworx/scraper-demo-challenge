import './App.css';
import Header from './components/Header'
import Landing from './pages/Landing'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {createTheme, ThemeProvider} from "@mui/material/styles";


// Theme pallet: https://coolors.co/32c3fd-000000-ebbf2c-002648
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#32C3FD',
      light: '#5BCFFD',
      dark: '#2388B1',
    },
    secondary: {
      main: '#FFCB1F',
      light: '#FFD447',
      dark: '#F5BC00',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Righteous Regular',
      
    },
    h2: {
      fontFamily: 'Righteous Regular',
    },
    h3: {
      fontFamily: 'Righteous Regular',
    },
    h4: {
      fontFamily: 'Righteous Regular',
    },
    h5: {
      fontFamily: 'Righteous Regular',
    },
    h6: {
      fontFamily: 'Nunito Sans Regular',
    },
    subtitle1: {
      fontFamily: 'Nunito Sans Regular'
    },
    subtitle2: {
      fontFamily: 'Nunito Sans Regular'
    },    
    body1: {
      fontFamily: 'Nunito Sans Regular'
    },    
    body2: {
      fontFamily: 'Nunito Sans Regular'
    },    
    button: {
      fontFamily: 'Nunito Sans Regular'
    },
    caption: {
      fontFamily: 'Nunito Sans Regular'
    },    
    overline: {
      fontFamily: 'Nunito Sans Regular'
    },
  },
  spacing: 10,
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" exact element={<Landing/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
