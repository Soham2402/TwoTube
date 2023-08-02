import {useState,useEffect, React} from 'react'


import { useParams,Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Stack,Box, Typography} from '@mui/material'

import VideoCard from './VideoCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const VideoDetail = () => {
  

  // Getting current video details 
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState([])
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetails(data.items[0]))
  },[id])

  //Getting suggested video details
  const [suggestedVideos, setSuggestedVideos] = useState([])
  useEffect(()=> {
    fetchFromAPI(`search?part=id,snippet,type=video,maxResults=40&relatedToVideoId=${id}`)
    .then((data) => setSuggestedVideos(data.items))
  },[id])

  if(!videoDetails?.snippet) return 'Loading';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  if(videoDetails.snippet){
    return (
      <Box sx={{minHeight:'96vh'}}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "90%", margin:'auto', position: "sticky", top: "86px", backgroundColor:'#212121', borderRadius: '8px'}} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant='h6'  color="#fff" >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box sx={{width:'320px',margin:'auto', marginTop:{xs:'2em'},marginRight:{md:'1em'}}}>
      <Stack direction='row' flexWrap="wrap" justifyContent="center" alignItems="center" gap={2} sx={{paddingX:'1em',overflow:'auto'}}>
          {suggestedVideos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video = {item}/>}
            </Box>
          ))}
        </Stack>
      </Box>
        
      </Stack>
    </Box>
  )
}
}

export default VideoDetail
