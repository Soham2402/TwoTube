import React from 'react'

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import {Typography,Box,Stack} from '@mui/material'

const SideBar = ({selectedCategory,setSelectedCategory}) => {

    const categories = [
        { name: 'New', icon: <HomeIcon />, },
        { name: 'Teri Mummy', icon: <CodeIcon />, },
        { name: 'Coding', icon: <CodeIcon />, },
        { name: 'ReactJS', icon: <CodeIcon />, },
        { name: 'Python', icon: <CodeIcon />, },
        { name: 'Music', icon: <MusicNoteIcon /> },
        { name: 'Education', icon: <SchoolIcon />, },
        { name: 'Podcast', icon: <GraphicEqIcon />, },
        { name: 'Movie', icon: <OndemandVideoIcon />, },
        { name: 'Gaming', icon: <SportsEsportsIcon />, },
        { name: 'Live', icon: <LiveTvIcon />, },
        { name: 'Sport', icon: <FitnessCenterIcon />, },
        { name: 'Fashion', icon: <CheckroomIcon />, },
        { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
        { name: 'Comedy', icon: <TheaterComedyIcon />, },
        { name: 'Gym', icon: <FitnessCenterIcon />, },
        { name: 'Crypto', icon: <DeveloperModeIcon />, },
      ];

      

  return (
    <Stack direction = 'row' sx={{flexDirection:{md:'column'},overflow:'auto',height:{sx:'auto',md:'95%'}}}>
        {categories.map(comp => {
            return (
                <button className='category-btn' key={comp.name} onClick={e => {setSelectedCategory(comp.name)}}
                style={{
                    background: comp.name === selectedCategory && "#FC1503",
                    color: "white",
                  }}>
                    <span style={{color: selectedCategory === comp.name ? 'white':'red'}}>{comp.icon}</span>
                    <span style={{opacity: selectedCategory === comp.name ? '1':'0.7'}}>{comp.name}</span>
                </button>
            )
        })}
    </Stack>
  )
}

export default SideBar
