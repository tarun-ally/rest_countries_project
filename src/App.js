import React, { Component } from 'react';
import './App.css';
import NavBar from './component/navigation';
import OneCountry from './component/anyOneCountry';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import BorderCountry from './component/borderCountry';
import SectionApp from './section';

class App  extends React.Component {

  render() { 
return(
  <BrowserRouter>
    <div>
      <NavBar/>
     </div>
<Switch>
<Route path="/country/:id"  exact component={OneCountry}/>
<Route path="/:id" exact  component={BorderCountry}/>
<Route path="/" exact  component={SectionApp}/>
</Switch>
    </BrowserRouter>
     )
  }
}
 
export default App ;
