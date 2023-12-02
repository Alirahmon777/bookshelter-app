import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Avatar, Badge, MenuItem, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icons } from '..';
import avatarImage from '../../assets/images/user-image.png';
import './style.css';
import { Search, SearchIconWrapper, StyledInputBase } from '../../helpers/tags';
import { SearchBooks } from '../../dispatch/book.dispatch';
import { useDispatch } from 'react-redux';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const dispatch = useDispatch();
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    SearchBooks(e.target.value)(dispatch);
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
      <MenuItem
        onClick={() => {
          setAnchorEl(null);
          localStorage.removeItem('key');
          localStorage.removeItem('secret');
          window.location.reload();
        }}
      >
        Log Out
      </MenuItem>
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
              onChange={handleSearch}
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
          value={searchText}
          onChange={handleSearch}
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
