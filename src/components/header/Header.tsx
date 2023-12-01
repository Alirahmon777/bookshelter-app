import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { Icons } from '..';
import avatarImage from '../../assets/images/user-image.png';
import './style.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  borderRadius: '6px',
  '& .MuiInputBase-input': {
    padding: '12px',
    borderRadius: '6px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  '& .MuiInputBase-input:focus': {
    backgroundColor: '#FEFEFE',
  },
  fontWeight: 400,
  fontSize: '16px',
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar position='static' sx={{ px: 0, flexGrow: 1, bgcolor: 'transparent', boxShadow: 'none' }}>
      <Box>
        <Toolbar sx={{ px: 0 }}>
          <Link to={'/dashboard'}>
            <Icons.logo />
          </Link>
          <Search sx={{ display: { xs: 'none', md: 'flex', py: '12px', height: 'auto' } }}>
            <SearchIconWrapper>
              <Icons.searchIcon className={`search-icon ${isInputFocused ? 'black' : ''}`} />
            </SearchIconWrapper>
            <StyledInputBase
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              type='search'
              id='header-search'
              placeholder='Search for any training you want'
              sx={{ minWidth: '380px', color: isInputFocused ? 'black' : '' }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '4px', sm: '20px' } }}>
            <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
              <Badge badgeContent={17} color='error'>
                <Icons.notificationIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <Avatar alt='Remy Sharp' src={avatarImage} />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      {renderMenu}
      <Search sx={{ display: { xs: 'flex', md: 'none', py: '12px', height: 'auto' } }}>
        <SearchIconWrapper>
          <Icons.searchIcon className={`search-icon ${isInputFocused ? 'black' : ''}`} />
        </SearchIconWrapper>
        <StyledInputBase
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder='Search for any training you want'
          sx={{
            color: isInputFocused ? 'black' : '',
            width: '100%',
            boxShadow: '0px 1px 4px 0px #e5e5e5',
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </AppBar>
  );
}
