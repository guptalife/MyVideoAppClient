import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SignIn from './signIn';
import SignUp from './signUp';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
const ResponsiveAppBar = ({ textColor }) => {
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const user = useSelector(selectUser);
  React.useEffect(()=>{
  },[user])
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <Toolbar>
      <Typography
        sx={{
          color: textColor,
          fontWeight: '600',
          fontSize: { md: '40px', xs: '20px' },
          flexGrow: 1,
          marginLeft: '100px'
        }}
      >Video Call App</Typography>
      {
        user?
          <Typography 
           color={textColor}
           paddingRight={'15px'}
          >
            Hi! {user.username}
          </Typography>
          :
          <>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button variant='outlined'
                sx={{
                  marginRight: '5px',
                  color: textColor
                }}
                onClick={() =>{
                  setSignInOpen(open => !open)
                }
                }
              > Sign In</Button>
              <Button
                variant='outlined'
                sx={{
                  marginRight: '20px',
                  color: textColor
                }}
                onClick={() => setSignUpOpen(open => !open)}

              > Sign Up</Button>
            </Box>
            <Box
              sx={{
                display: { sm: 'flex', md: 'none' }
              }}
            >
              <IconButton
                onClick={handleOpen}
              >
                <MenuIcon
                  color='secondary'
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                color='black'
              >
                <MenuItem
                  onClick={()=>{
                    setAnchorEl(null);
                    setSignInOpen(open=>!open)
                  }}
                  sx={{
                    height: { xs: '12px' }
                  }}
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  onClick={()=>{
                    setAnchorEl(null);
                    setSignUpOpen(open=>!open)
                  }}
                >
                  Sign Up
                </MenuItem>
              </Menu>
            </Box>
            <SignIn
              open={signInOpen}
              setOpen={setSignInOpen}
            />
            <SignUp
              open={signUpOpen}
              setOpen={setSignUpOpen}
            />
          </>
      }
    </Toolbar>
  );
};
export default ResponsiveAppBar;
