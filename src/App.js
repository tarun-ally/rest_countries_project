import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import NavBar from './component/navigation';
import CountryDetails from './component/countryDetails';
import Home from './home';

class App  extends React.Component {

  render() { 
return(
  <BrowserRouter>
    <div>
      <NavBar/>
     </div>
<Switch>
<Route path="/:id"  exact component={CountryDetails}/>
<Route path="/" exact  component={Home}/>
</Switch>
    </BrowserRouter>
     )
  }
}
 
export default App ;
