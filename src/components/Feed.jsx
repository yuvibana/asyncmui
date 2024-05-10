import { Avatar, Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import { Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from '../StaticImages'

function Feed() {
  return (
    <Box
      flex={4}
      p={2}
    >
      <Post imageUrl={Image1} />
      <Post imageUrl={Image2} />
      <Post imageUrl={Image3} />
      <Post imageUrl={Image4} />
      <Post imageUrl={Image5} />
      <Post imageUrl={Image6} />
      <Post imageUrl={Image7} />
      <Post imageUrl={Image8} />
    </Box>
  )
}

export default Feed