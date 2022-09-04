import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

const Header = ()=>{
  const dispatch = useDispatch()
  const logoutOfApp = ()=>{
      dispatch(logout())
      auth.signOut()
  }
 return (
    <div className="header">
       <h1>Linkedin clone</h1>
        <div className="header__left">
          <img src="./img/linkedin(1).png" alt="" />

          <div className="header__search">
          <SearchIcon/>
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="My Network" />
          <HeaderOptions Icon={ChatIcon} title="My Network" />
          <HeaderOptions Icon={NotificationsIcon} title="My Network" />
          <HeaderOptions avatar={true} onClick={logoutOfApp} title="me" />
        </div>
    </div>
 )
}


export default Header