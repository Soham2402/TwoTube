import React from 'react'

import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants.js'
import {SearchField} from '../components'


const NavBar = () => (
  <Stack direction={'row'} p={2} sx={{position: "sticky",top: 0, justifyContent:"space-between", background: 'linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(253,187,45,0) 100%)'}}>

    <Link to={'/'} ><img src={logo} alt="logo" height={45} /></Link>    
    <SearchField />
  </Stack>
)

export default NavBar
