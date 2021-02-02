import { Button } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import SideLeftOption from './sidebarInputs';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SendMail from './SendMail';
import { useHistory } from 'react-router-dom';


// const COMPOSEBUTTON=styled.Button`
// margin-top:15px;
// margin-left:10px;
// margin-bottom:15px;
// padding:15px;
// border-radius:30px;
// color:gray;
// box-shadow:0px 2px 5px -2px white;
// `;

function Sideleftbar()
{
 

let history=useHistory();

return( 
    <div>
      <Button startIcon={<AddIcon fontSize="large"/>} onClick= {()=>history.push("/Composenew")}>
          Compose
      </Button> 
     
      <SideLeftOption Icon={InboxIcon} title="Inbox" number={54} />  
      <SideLeftOption Icon={AccessTimeIcon} title="Snoozed" number={54}  /> 
      <SideLeftOption Icon={NearMeIcon} title="Important" number={54} /> 
      <SideLeftOption Icon={NoteIcon} title="Sent" number={54} /> 
      <SideLeftOption Icon={ExpandMoreIcon} title="More" number={54} /> 
    </div> 
);
}
export default Sideleftbar

