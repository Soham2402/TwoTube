import React from 'react'

import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import {demoVideoTitle} from '../utils/constants'

let sliceTitle = (title) => {
  if(title.length >= 60){
    title = title.slice(0,60)
    return title.concat(" ...")
  }else{
    return title
  }
}

let getDate = (date) => {
  let d = new Date(date)
  return d.toDateString()
}

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  if(!snippet) return 'Loading';
  
  // console.log(videoId,snippet)
  return (
    <Card style={{backgroundColor:'#212121', maxWidth: '320px'}}   sx={{
      ':hover': {
        transform:'scale(1.01)', boxShadow:20, transition: '0.25s ease-in-out' // theme.shadows[20]
      },
    }}> 
      <Link to={videoId? `/video/${videoId}`:demoVideoTitle}>
        <CardMedia component='img'  image = {snippet?.thumbnails?.high?.url} alt = {snippet?.title} 
        sx={{width:320, height:180, borderBottom: 'none',borderRadius:'0.5em'}}/>
        <CardContent sx={{pb:'0.5em'}} ><Typography variant="body2" color="white">{sliceTitle(snippet?.title)}</Typography></CardContent>
        <CardContent sx={{py:0}} ><Typography variant='caption' color="grey">{snippet?.channelTitle}</Typography></CardContent>
        <CardContent sx={{py:0}} ><Typography variant='caption' color="grey">{getDate(snippet?.publishedAt)} </Typography></CardContent>
      </Link>


    </Card>

  )
}

export default VideoCard
