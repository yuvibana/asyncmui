import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, styled } from '@mui/material'
import React from 'react'
import CustomAvtar from '../assets/images/common/user.jpg'
import ImagesData from '../RecentPost'

function RightBar() {


  const FixedBox = styled(Box)(({ theme }) => ({
    // margin: '10px 0',
  }, { name: 'FixedBox' }))

  const LiveUser = styled(Box)(({ theme }) => ({
    marging: '10px 0',
  }, { name: 'LiveUser' }))

  const LatestPostBox = styled(Box)(({ theme }) => ({
    margin: '10px 0'
  }, { name: 'LatestPostBox' }))


  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <FixedBox
        className='FixedBox FixedBox1'
      >
        <LiveUser
          className='LiveUser'
          width={'fit-content'}
          marginBottom={'15px'}
        >
          <Typography variant='h6' fontWeight={100} marginBottom={'5px'}>Online Friends</Typography>
          <AvatarGroup max={5}>
            <Avatar alt="Remy Sharp" src={CustomAvtar} />
            <Avatar sx={{ bgcolor: 'red' }} aria-label="user 2">
              {/* async js dev */}
            </Avatar>
            <Avatar sx={{ bgcolor: 'blue' }} aria-label="user 3">
              {/* async js dev */}          </Avatar>
            <Avatar sx={{ bgcolor: 'yellow' }} aria-label="user 4">
              {/* JAD */}
            </Avatar>
            <Avatar sx={{ bgcolor: 'green' }} aria-label="user 5">
              {/* JAD */}
            </Avatar>
            <Avatar sx={{ bgcolor: 'red' }} aria-label="user 6">
              {/* JAD */}
            </Avatar>
          </AvatarGroup>
        </LiveUser>

        <LatestPostBox
          className='LatestPostBox'
        >
          <Typography variant='h6' fontWeight={100} marginBottom={'5px'}>Latest Posts</Typography>

          <ImageList variant="masonry" cols={3} gap={8}>
            {ImagesData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </LatestPostBox>
      </FixedBox>
    </Box>
  )
}

export default RightBar