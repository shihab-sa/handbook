import { AppBar, styled, Toolbar, Typography,Box } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from "react";
import { InputBase } from '@mui/material';
import { theme } from "../theme";



const StyleToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})

const Search = styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:'40%'

}))

const Icon = styled(Box)(({theme})=>({
    backgroundColor:'white'

}))

const Navbar=()=>{
    return(
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography variant="h6" sx={{display:{xs:'none',sm:'block'}}}>HandBook</Typography>
                <MenuBookIcon sx={{display:{xs:'block',sm:'none'}}}/>
                <Search>< InputBase placeholder="search"/></Search>
                <Icon>icon</Icon>
            </StyleToolbar>             
        </AppBar>
    )
}

export default Navbar 


// end of 30m