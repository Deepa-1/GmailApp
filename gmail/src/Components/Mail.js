
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router-dom';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
function Mail()
{
    const history=useHistory();
    return(
        <div>
          <div >
              <div>
               <IconButton onClick={()=>history.push("/")}>
                <ArrowBackIcon/>
               </IconButton>
<IconButton>
    <MoveToInboxIcon/>
</IconButton>
<IconButton>
 <ErrorIcon/>
</IconButton>
<IconButton>
 <DeleteIcon/>
</IconButton>
              </div>
              <div>
              </div>
              <div>
                  <h1>HOLIDSAYS!--</h1>
              </div>
          </div>

        </div>
    );


}

export default Mail