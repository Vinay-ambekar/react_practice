import { AppBar, Button, IconButton, Toolbar,Box, MenuItem, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { Link } from "react-router-dom";

function Header(){
const [anchorEl, setAnchorEl] = React.useState(null);

const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

return(
    <>
    <AppBar position="relative">
        <Toolbar>
            <Box  sx={{display:{xs:'none',sm:'none',md:'none',lg:'flex'}}}>
            <Link to="/" style={{ textDecoration: 'none',color:'white' }}> <Button color="inherit">Home</Button></Link>
            <Link to='/List' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> classList </Button> </Link>
            <Link to='/fList' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> functionList </Button> </Link>
            <Link to='/afList' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> functionAddedList </Button> </Link>
            <Link to='/pageclass' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> paginationclass </Button> </Link>
            <Link to='/contact' style={{ textDecoration: 'none',color:'white' }}><Button color="inherit"> Login</Button> </Link>
            </Box>
            <IconButton 
             color="inherit" 
             sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none'}}}
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             >
            <MenuIcon/>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              sx={{display:{xs:'flex',sm:'flex',md:'flex',lg:'none'}}}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><Link to='/' style={{ textDecoration: 'none',color:'black' }}>Home</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/List' style={{ textDecoration: 'none',color:'black' }}>List</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/pageclass' style={{ textDecoration: 'none',color:'black' }}>paginationclass</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/contact' style={{ textDecoration: 'none',color:'black' }}>Login</Link></MenuItem>
              
            </Menu>
         </Toolbar>
    </AppBar>
                  


        </>
    )
}
export default Header;