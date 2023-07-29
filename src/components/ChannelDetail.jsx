import {React,useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import {ChannelCard, VideoCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {VideoSection} from './'


const ChannelDetail = () => {

  const {id} = useParams()

  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])


  console.log(videos)

  useEffect(()=>{
            fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {setChannel(data.items[0])})
            fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => {setVideos(data?.items)})

  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
      <div style={{ background: 'radial-gradient(circle, rgba(163,163,163,1) 0%, rgba(33,33,33,1) 100%)', height:'45vh'}} />

      <div style={{marginTop:'-130px',pointerEvents:'none'}}>
        {channel && <ChannelCard channel = {channel}  />}
      </div>
      
      </Box>

      <Box> 
        <VideoSection videos = {[videos]}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
