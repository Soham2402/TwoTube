import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import {NavBar,Feed,VideoDetail,ChannelDetail,SearchField} from './components'


function App() {
  return (
    <Box sx={{backgroundColor:'#000'}}>
      <NavBar/>
      <Routes>
        <Route  path='/' element = { <Feed/> } exact />
        <Route  path='/video/:id' element = { <VideoDetail/> } />
        <Route  path='/channel/:id' element = { <ChannelDetail/> } />
        <Route  path='/search/:searchTerm' element = { <SearchField/> } />
      </Routes>
    </Box>
  )
}

export default App
