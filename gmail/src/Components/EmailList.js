
import { Checkbox, IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import EMAILROW from './EmailRow';
import SendMail from './SendMail';
import propTypes from 'prop-types';

const EmailSettings=styled.div`
position:sticky;
top:0;
display:flex;

justify-content:space-between;
border-bottom:1px solid whitesmoke;
background-color:white;
padding-right:10px;
align-items:center;
`;
const ListEmail=styled.div`
flex:1;

overflow:scroll;
`;
const HEADER2=styled.div`
flex:1;
border-bottom:1px solid whitesmoke;

`;



function EmailList(props)
{
    const {enableComposeDialog} = props;
    return(
        <>
        <ListEmail>
            <EmailSettings>
                  <div>
                      <Checkbox />
                       <IconButton>
                        <ArrowDropDownIcon />
                       </IconButton>
                       <IconButton>
                       <RedoIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                  </div>
                  <div>                     
                     <IconButton>
                         <KeyboardHideIcon />     
                     </IconButton>    
                  </div>
                  {/* <div> 
                 <ul>
  <li>  <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
  <li> <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
  <li> <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
</ul>
</div> */}
                
            </EmailSettings>

            {/* <ul>
  <li>  <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
  <li> <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
  <li> <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" /></li>
</ul> */}

           <HEADER2>
                <Button startIcon={<ArrowDropDownIcon fontSize="large" />}>
                   Unread
                 </Button>  
                 <IconButton>
             <MoreVertIcon />
             </IconButton>                    
            </HEADER2>
            <div>
              <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" />
              <EMAILROW title="Bye" subject="Regarding Holidays" description="I want holidays" Date="26Jan" />
              <EMAILROW title="Holidays" subject="Regarding Holidays" description="I want holidays" Date="26Jan" />
            </div> 

            <div>
            <EMAILROW title="Bye" subject="Regarding Holidays" description="I want holidays" Date="26Jan" />
            </div>
          
            {/* <div>
            <IconButton>
             <MoreVertIcon />
             </IconButton>
            </div> */}            
        </ListEmail>
        {enableComposeDialog && (<SendMail />)}
        </>
    );


}

EmailList.propTypes = {
    enableComposeDialog: propTypes.bool,
  };
  EmailList.defaultProps = {
    enableComposeDialog: true,
  };

export default EmailList;