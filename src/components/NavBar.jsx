import React from 'react'

import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from './utils/constants.js'


const NavBar = () => (
  <Stack direction={'row'} 
    p={2} 
    sx={{backgroundColor: "#000",
    position: "sticky",
    top: 0,
    justifyContent:"space-between"}}>

    <Link to={'/'} >
      <img src={logo} alt="logo" height={45} />
      
      </Link>
  </Stack>
)

export default NavBar
