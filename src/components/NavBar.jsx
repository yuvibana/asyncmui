import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/MarkEmailUnread';
import Notifications from '@mui/icons-material/NotificationsNone';
import UserIcon from '../assets/images/common/user.jpg'
import JavascriptIcon from '@mui/icons-material/Javascript';


function NavBar() {

  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  })

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: '5px 15px',
    borderRadius: theme.shape.borderRadius,
    width: '30%'
  }))
  const Icons = styled("div")(({ theme }) => ({
    display: 'flex',
    gap: '0 20px',
    alignItems: 'center'
  }))

  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>Asyncdev</Typography>
        <JavascriptIcon variant='h5' sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search> <InputBase placeholder='Search...' /> </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src={UserIcon} />
        </Icons>
        <MenuIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar