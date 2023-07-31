import {useState,useEffect, React} from 'react'


import { useParams,Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Stack,Box, Typography} from '@mui/material'

import VideoCard from './VideoCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const VideoDetail = () => {
  
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState([])
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetails(data.items[0]))
  },[id])

  if(videoDetails.snippet){
    return (
      <Box sx={{minHeight:'96vh'}}>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86%'}}>
            <ReactPlayer   url = {`https://www.youtube.com/watch?v=${id}`}  className = 'react-player' controls = {true} />
            <Typography variant='h5' sx={{color:'white',fontWeight:'bold',paddingTop:'0.7em'}}>{videoDetails.snippet.title}</Typography>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}
}

export default VideoDetail
