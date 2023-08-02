import React from 'react'
import {useEffect,useState} from 'react'

import { Box, Stack , Typography} from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import {VideoSection,SideBar} from './'

const Feed = () => {

  
  const [selectedCategory,setSelectedCategory] =  useState("New")
  const [videos,setVideos] =  useState([])



  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {setVideos(data.items)})
  },[selectedCategory]) 

  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

      <Box sx={{color:'#fff',height:{sx:'10vh',md:'92vh'},borderRight: '1px solid #3d3d3d',px:{sx:0,md:2}}}>

        <SideBar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />npm rundev
      </Box>

      <Box p = {2} sx={{overflow:'auto' ,height:'90vh',flex:2}}>

        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >{selectedCategory} 
            <span className = 'fix1'style={{color:'#h31503'}}> Videos</span>
        </Typography>
          
        {videos.length > 0 && <VideoSection videos = {[videos]}/>}

      </Box>
    </Stack>
  )
}

export default Feed
