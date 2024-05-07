import './App.css'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Container, Stack } from '@mui/material'
import NavBar from './components/NavBar'

function App() {


  return (
    <Box
    // sx={{ background: '#eee' }}
    >
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
