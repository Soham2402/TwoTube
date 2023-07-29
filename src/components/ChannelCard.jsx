import React from 'react'

import { Box,Card, CardContent,CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channel:{snippet},channel}) => {
  return (
    <Box sx={{borderRadius:'20px', 
              boxShadow:'none',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              width:{xs:'356px',md: '320px',
              height:'326px',
              margin:'auto'}

     }}>

      <Link to={`channel/${channel.id.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column',
                          justifyContent:'center', 
                          textAlign: 'center',
                          color:'white', gap:'1em', }}>
          <CardMedia component='img'  image = {snippet?.thumbnails?.high?.url} 
                      alt = {snippet?.title} 
                      sx={{width:180, height:180, borderBottom: 'none',
                          borderRadius:'16em',
                          ':hover': {transform:'scale(1.01)', boxShadow:20, 
                          transition: '0.25s ease-in-out' // theme.shadows[20]
                      }}}/>
          <Typography variant='subtitle2'>{snippet.title}</Typography>

          {/* //get subscriberCount */}
          {channel?.statistics?.subscriberCount &&  (
            <Typography variant='subtitle2' color='grey' sx={{lineHeight:'0px'}}>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subs
            </Typography>
          )}
          </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
