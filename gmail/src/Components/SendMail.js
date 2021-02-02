
import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Input } from '@material-ui/core';
import './SendMail.css';

// const SENDMAILS=styled.div`
// position:absolute;
// bottom:0px;
// right:50px;
// background-color:#404040;
// width:40%;
// height:40%;
// max-width:500px;
// border-top-left-radius:10px;
// border-top-right-radius:10px;
// display:flex;
// border:1px solid whitesmoke;
// box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);
// `;
// const SENDMAILHEADER=styled.div`
// padding:13px;
// display:flex;
// justify-content:space-between;
// align-items:center;
// color:gray;
// `;
// const H3=styled.h3`
// color:whitesmoke;
// font-size:13px;
// `;
// const FORM=styled.form`
// flex:1;
// flex-direction:column;
// `;
// const INPUT=styled.input`
// height:30px;
// padding:10px;
// border:none;
// border-bottom:1px solid whitesmoke;
// outline:none;
// `;

function SendMail()
{

    return(
        <div className="sendMail">
          <div className="sendMail_header">
              <h3>New Message</h3>
      <CloseIcon  className="sendMail_close"/>
          </div>  
            
          <form>
              <input type="text" placeholder="To">
              </input>
              <input type="text" placeholder="Subject">
              </input>
              <input type="text" placeholder="Message">
              </input>
              <div className="sendMail_options">
                  <Button  className="sendMail_send">Send</Button>
              </div>
          </form>
  
        
     
        </div>
    );
}
export default SendMail;