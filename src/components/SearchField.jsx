import React from 'react'

import {useNavigate} from 'react-router-dom'
import { useState} from 'react'

import { Paper,IconButton} from '@mui/material'
import { Search} from '@mui/icons-material'



const SearchField = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query){
      navigate(`/search/${query}`)
      setQuery('')
    }
    
  }



  return (
    <div>
      <Paper component={'form'}  onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        boxShadow: 'None',
        pl: 2,
        pr:2,
        mr:{sm:5}
      }} >
          <input  className='search-bar' onChange ={(e)=>{setQuery(e.target.value)}} value={query} placeholder={query} type="text" />
          <IconButton type='submit' aria-label='search' sx={{p:'10px', color:'red'}} ><Search/></IconButton>
      </Paper>
    </div>
  )
}

export default SearchField
