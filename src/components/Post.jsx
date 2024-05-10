import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'


function Post({ imageUrl }) {

    const defaultImage = 'https://resize.indiatvnews.com/en/resize/newbucket/3685_-/2023/05/ravindra-jadeja-1684929585.jpg';

    return (
        <Card
            sx={{ marginBottom: "25px" }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipee">
                        {/* JAD */}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Async Js Dev"
                subheader="September 14, 2024"
            />
            <CardMedia
                component="img"
                height="550px"
                image={imageUrl ? imageUrl : defaultImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {/* <Favorite /> */}
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post