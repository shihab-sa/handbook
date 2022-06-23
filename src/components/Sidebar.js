import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";

const Sidebar=()=>{
    return(
        <Box  flex={1}  p={2} 
        sx={{display:{xs:"none",sm:"block"}}}
        >
               <List>
           <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon>
               <NoteAddIcon/>
              </ListItemIcon>
              <ListItemText primary="page" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#group">
              <ListItemIcon>
               <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="group" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
               <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="marketplace" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
               <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="friends" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
               <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="setting" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
               <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
               < ModeNightIcon/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>


          </List>
        </Box>
    )
}

export default Sidebar