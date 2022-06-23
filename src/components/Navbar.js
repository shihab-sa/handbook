import { AppBar, styled, Toolbar, Typography,Box,Badge,Avatar,Menu,MenuItem} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React, { useState } from "react";
import { InputBase } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';



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

    display:"none",
    gap:"20px",
    alignItems:"center",
    [ theme.breakpoints.up("sm")]:{
        display:'flex'
    }
    

}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"20px",
    alignItems:"center",
    [ theme.breakpoints.up("sm")]:{
        display:'none'
    }
    
}))
const Navbar=()=>{
    const [open,setOpen]=useState(false)
    return(
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography variant="h6" sx={{display:{xs:'none',sm:'block'}}}>HandBook</Typography>
                <MenuBookIcon sx={{display:{xs:'block',sm:'none'}}}/>
                <Search>< InputBase placeholder="search"/></Search>
                <Icon>
                <Badge badgeContent={4} color="error">
                <MailIcon/>
               </Badge>
               <Badge badgeContent={4} color="success">
                              <MailIcon color="action" />
               </Badge>
                   <Avatar 
                   onClick={(e)=>setOpen(true)}
                   sx={{ height:30,width:30}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </Icon>
                <UserBox onClick={(e)=>setOpen(true)}>
                <Avatar sx={{ height:30,width:30}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Typography variant="span">Ahmed</Typography>
                </UserBox>
            </StyleToolbar>

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
   </AppBar>
)
}

export default Navbar ;

