import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import {NavBar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components'


function App() {

  return (
    <Box sx={{backgroundColor:'#181818'}}>
      <NavBar/>
      <Routes>
        <Route  path='/' element = { <Feed/> } exact />
        <Route  path='/video/:id' element = { <VideoDetail/> } />
        <Route  path='/channel/:id' element = { <ChannelDetail/> } />
        <Route  path='/search/:searchTerm' element = { <SearchFeed/> } />
      </Routes>
    </Box>
  )
}

export default App
