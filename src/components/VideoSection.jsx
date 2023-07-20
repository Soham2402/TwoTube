import { Stack,Box } from '@mui/material'
import React from 'react'
import { VideoCard,ChannelCard } from '.'


const VideoSection = ({videos}) => {
  videos = videos[0]
  return (  
    <Stack direction='row' flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {item.id.channelId && <ChannelCard channel = {item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default VideoSection
