# asyncmui

<!-- 
<Button className='heee' variant="text" sx={{
        fontSize: '25px',
        "&:hover": {
          background: '#ddd'
        }
      }}>async mui</Button>

**********=============================**********************=====================************************====================

import { Button, styled } from '@mui/material'
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete'
import { Add, Settings } from '@mui/icons-material'
import { theme } from './theme'

function App() {

  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    fontSize: '25px',
    "&:hover": {
      background: '#ddd'
    }
  }))

  return (
    <>
      <h1 >async mui app</h1>
      <Button className='heee' variant="text">Hello world</Button>
      <Button startIcon={<DeleteIcon />} variant="contained" color="otherColor">Hello world</Button>
      <Button startIcon={<Add />} variant="outlined">Hello world</Button>
      <BlueButton>My new Button</BlueButton>
    </>
  )
}

export default App



**********=============================**********************=====================************************====================

import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1760a5',
            light: 'skyblue'
        },
        secondary: {
            main: '#15c630'
        },
        otherColor: {
            main: '#999'
        }
    }
})




**********=============================**********************=====================************************====================


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

 -->