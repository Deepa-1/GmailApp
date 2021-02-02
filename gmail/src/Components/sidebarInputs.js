
import React from 'react';
import styled from 'styled-components';

const DIV=styled.div`
display:flex;
align-items:center;
height:40px;

padding: 0 10px;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
cursor: pointer;
color:#818181;
&:hover{
background-color:#fcecec;
color:#c04b37;
font-weight:800;
}
`;

const H3=styled.h3`
flex:1;
margin-left:10px;
font-size:14px;
font-weight:400;
`;
const P=styled.p`
&:hover{
display:inline;
}
`;



function sidebarInputs({Icon,title,number})
{
    return(

        <DIV>
          <Icon />             
            <H3>{title}</H3>
            <P>{number}</P>
        </DIV>

    );
}



export default sidebarInputs;