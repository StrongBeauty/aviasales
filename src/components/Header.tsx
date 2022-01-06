import React, { FC, useState } from 'react';
import { Toolbar, Typography, IconButton, AppBar, Menu } from '@mui/material';
import LocalAirportRoundedIcon from '@mui/icons-material/LocalAirportRounded';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { SLink } from '../styled';
import { MESSAGES } from '../constants';
import { actions, ActionsType, Selectors } from '../store';

export const Header: FC = () => {
  const dispatch = useDispatch<Dispatch<ActionsType>>();
  const isAuth = useSelector(Selectors.isAuth);
  const userName = useSelector(Selectors.userName);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const { menuItems, menuItemExit } = MESSAGES.header;

  const handleMenu = (event: { currentTarget: React.SetStateAction<null> }) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onSubmit = () => {
    dispatch(actions.toggleIsAuthAC(!isAuth, ''));
  };

  return (
    <AppBar sx={{ borderRadius: '4px 4px 0px 0px' }} color="common" position="static">
      <Toolbar>
        <Typography
          style={{ display: 'flex' }}
          variant="h6"
          component="header"
          sx={{ flexGrow: 1 }}
        >
          {location.pathname !== '/' ? (
            <SLink to="../">
              <LocalAirportRoundedIcon sx={{ color: '#4881FF', cursor: 'pointer' }} />
            </SLink>
          ) : (
            <LocalAirportRoundedIcon sx={{ color: '#4881FF' }} />
          )}
        </Typography>
        {location.pathname !== '/' && (
          <SLink to="/" sx={{ padding: '100px' }}>
            Home
          </SLink>
        )}
        {location.pathname !== '/auth' && !isAuth && <SLink to="/auth">Log in/Sign up</SLink>}
        {isAuth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <PersonIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.title} onClick={handleClose}>
                  <SLink to={item.link}>{item.title}</SLink>
                </MenuItem>
              ))}
              <MenuItem onClick={handleClose}>
                <SLink to={menuItemExit.link} onClick={onSubmit}>
                  {menuItemExit.title}
                </SLink>
              </MenuItem>
            </Menu>
            <b style={{ paddingLeft: '16px' }}>{userName}</b>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
