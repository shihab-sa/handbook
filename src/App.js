import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import  Feed  from "./components/Feed";
import { Box, Container } from "@mui/system";
import { Stack } from "@mui/material";


const App=()=>{
    return(
        <Box>
          <Navbar/>
          <Stack direction='row' spacing={2} justifyContent='space-between'>
             <Sidebar/>
              <Feed/>
             <Rightbar/>
          </Stack>
         
        </Box>
    )
}
export default App