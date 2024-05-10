import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/MarkEmailUnread';
import Notifications from '@mui/icons-material/NotificationsNone';
import UserIcon from '../assets/images/common/user.jpg'
import JavascriptIcon from '@mui/icons-material/Javascript';


function NavBar() {

  const [open, setOpen] = useState(false)

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
    display: 'none',
    gap: '0 20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }))

  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>Asyncdev</Typography>
        <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>ASDEV</Typography>
        <Search> <InputBase sx={{ width: '100%' }} placeholder='Search...' /> </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            onClick={e => setOpen(true)}
            sx={{ width: 30, height: 30 }} src={UserIcon} />
        </Icons>
        <UserBox
          onClick={e => setOpen(true)}
        >
          <Avatar sx={{ width: 30, height: 30 }} src={UserIcon} />
          <Typography>Asyncdev</Typography>
        </UserBox>
        <Menu
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
        {/* <MenuIcon sx={{ display: { xs: 'block', sm: 'none' } }} /> */}

      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar