
import './App.css';
import React from "react";
import Header from './Components/header';
import SideLeft from './Components/Sideleftbar';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import EmailList from './Components/EmailList';
import Mail from './Components/Mail';
import styled from 'styled-components';
import SendMail from './Components/SendMail';

//import side-left-bar from './Components/side-left-bar';
const APPBODY=styled.div`
display:flex;
height:800px;
`;

function App() {
  return (
    <Router>
    <div>
      <Header />  
      <APPBODY>
         <SideLeft /> 
         <Switch>
           <Route path="/mail">
                <Mail />
           </Route>
           <Route path="/Composenew">
           <EmailList enableComposeDialog={true} />
           </Route>
           <Route path="/">
             <EmailList enableComposeDialog={false}/>
           </Route>
           </Switch>
      </APPBODY>
  </div>
    </Router>
  );
}
export default App;
