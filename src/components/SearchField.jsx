import React from 'react'

import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

import { Paper,IconButton} from '@mui/material'
import { Search} from '@mui/icons-material'


const SearchField = () => {
  const [query, setQuery] = useState('')
  console.log(query)
  return (
    <div>
      <Paper component={'form'} onClick={e => {}}
      sx={{
        borderRadius: 20,
        boxShadow: 'None',
        pl: 2,
        pr:2,
        mr:{sm:5}
      }} >
          <input  className='search-bar' onChange ={(e)=>{setQuery(e.target.value)}} name='search' placeholder={query} type="text" />
          <IconButton type='submit' sx={{p:'10px', color:'red'}} ><Search/></IconButton>
      </Paper>
    </div>
  )
}

export default SearchField
