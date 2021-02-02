import styled from "styled-components";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
//import {IconButton} from "@material-ui/core";
import {IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import mdiDotsGrid  from '@mdi/js';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const HEADERLEFT=styled.div`
display:flex;
align-items:center;
`;
const IMG=styled.img`
object-fit:contain;
height:50px;
margin-left: 5px;
`;
const DIV= styled.div`
 display:flex;
 align-items:center;
 justify-content: space-between;
 border-bottom: 1px solid whitesmoke;
`;
const HEADERMIDDLE=styled.div`
display:flex;
flex:0.7;
align-items:center;
padding:10px;
background-color:whitesmoke;
border-radius:5px;
`;

const INPUT=styled.input`
border:none;
width:100%;
padding:10px;
background-color:transparent;
outline:none;
font-size:large;
`;
const HEADERRIGHT=styled.div`
display:flex;
padding:10px;
align-items:center;
padding-left:50px;

`;
function header()
{
    return(
        <DIV >
        <HEADERLEFT>
           <IconButton>
           <MenuIcon></MenuIcon>
          </IconButton>

           <IMG src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"></IMG>

        </HEADERLEFT>
    <HEADERMIDDLE>
        <SearchIcon></SearchIcon>
        <INPUT type="search" placeholder="Search mail"/>
        <ArrowDropDownIcon></ArrowDropDownIcon>                 
    </HEADERMIDDLE>
<HEADERRIGHT>
      <IconButton>
         <HelpOutlineIcon />
    </IconButton>
    <IconButton>
        <AppsIcon/>
     </IconButton>
    <IconButton>
        <NotificationsIcon />
    </IconButton>
    <IconButton>
        <AccountCircleIcon />
        </IconButton>
       
 </HEADERRIGHT> 
          
       
        </DIV>


        
    );
}
export default header;