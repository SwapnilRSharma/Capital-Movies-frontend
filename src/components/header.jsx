import React , {useEffect, useState} from 'react';
// import { AppBar } from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const history = useHistory()
    const [ user, setUser ] = useState('');
function handleLogin(){
    fetch('http://localhost:3000/login', {
  method: 'POST', // or 'PUT'
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    'email': 'demo@demo.com',
    'password': '123456'
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  setUser(data.token);
  localStorage.setItem('user' , data.token)
  console.log(localStorage.getItem('user'))
})
.catch((error) => {
  console.error('Error:', error);
});
    // fetch('http://localhost:3000/login')
  
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   setUser(data.results);
    // })
}
useEffect(()=>{
  setUser(localStorage.getItem('user'))
},[])
useEffect(() => {
  console.log("localstorage changes");
}, [user]);

const [login , setLogin] = useState(false)
function handleLogout(e)
{
  setUser('');
  localStorage.setItem('user' , "")
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'black'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Capital Movies
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {
          
             user != "" ? 
              <Button color="inherit" onClick={(e)=>handleLogout(e)}>Logout</Button> :
              <Button color="inherit" onClick={(e) => history.push("/login")}>Login</Button> 
          }
        
        {
          login ? <Link to="/login" /> : null
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
