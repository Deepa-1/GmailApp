import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const EMAILROWLISTINGS=styled.div`
display:flex;
align-items:center;
height:50px;
border-bottom:1px solid whitesmoke;
cursor: pointer;
&:hover{
border-top:1px solid whitesmoke;
box-shadow:0px 4px 4px -2px rgba(0,0,0,0.24);
}
`;
const EmailRowOptions=styled.div`
display:flex;
`;
const EmailRowMessage=styled.div`
display:flex;
flex:0.8;
align-items:center;
font-size:13px;
`;
const EmailRowTitle=styled.div`
font-size:13px;
flex:0.3;
`;
const EmailRowDate=styled.div`
padding-right:15px;
font-size:12px;
font-weight:bold;
`;

function EmailRow({id,title,subject,description,Date})
{

  
    let history=useHistory();
    return(
     <EMAILROWLISTINGS >         
     <EmailRowOptions> 
    <Checkbox  />
    <IconButton>
       <StarBorderIcon />
    </IconButton>
    <IconButton>
     <LabelOutlinedIcon />
    </IconButton>
  </EmailRowOptions>
  <EmailRowTitle onClick= {()=>history.push("/mail")} >
      <h3>{title}</h3>
  </EmailRowTitle>
    <EmailRowMessage>
      <h4>
          {subject}
      </h4>
       <span><p>-{description}</p></span>
    </EmailRowMessage>
     <EmailRowDate>
      {Date}
     </EmailRowDate>
    </EMAILROWLISTINGS>

    );

}
export default EmailRow