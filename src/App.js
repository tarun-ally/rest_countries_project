import React, { Component } from 'react';
import './App.css';
import NavBar from './component/navigation';
import HeroSec from './component/heroSection';
import Search from './component/searchAndFilter';
import OneCountry from './component/anyOneCountry';
import{BrowserRouter,Link, Route, Switch} from 'react-router-dom';



class App  extends React.Component {

 
    state ={
        items:[],
        inputValue:'',
        DataisLoaded:false,
        allCountryDisplay:'grid',
        region:[],
        regionValue: '',
        indexForCountry:0,

    };

countryFilterOnChange =(event)=>{

  this.setState({
    inputValue: event.target.value,
    regionValue:''
    // allCountryDisplay:'none'
  })
  // console.log('hi from on change',event.target.value)
}

countryFilterByRegion=(event)=>{
console.log(event.target.innerText,'start');
  this.setState({
    regionValue:event.target.innerText,
    inputValue:''

  })
}

// countryDetails=(val)=>{
//   // console.log(event.target.getAttribute('countryIndex'),'kell')


//   console.log('48',val)

// // console.log(event.target.parentNode.getAttribute('countryIndex'),'rasa')
// this.setState({


//   indexForCountry:val

  
// })

// }
componentDidMount(){
    fetch(`https://restcountries.com/v2/all/`)
    .then((res)=> res.json())
    .then((json)=>{
        this.setState({
            items:[...json],
            dataisLoaded:true
          
          })
    })
}


  render() { 
    const{ dataisLoaded,items } = this.state;
    if(!dataisLoaded)return(<div>
        <p>please wait...</p></div>);

      const filter = items.map(c=>{
        if(!this.state.region.includes(c.region)){
          this.state.region.push(c.region)
        }
      }) 
// console.log('kane',this.state.region,'mane')
return(

  <BrowserRouter>
    

      
    <div>
      <NavBar/>
      
     <Search
        countryFilterOnChange={this.countryFilterOnChange}

        filteringContent = {this.state}

        countryByRegion ={this.countryFilterByRegion}
     />
    {/* <OneCountry 

      singleContent= {this.state}
    
    /> */}
      <HeroSec 
      content= {this.state}
      countryDetails={this.countryDetails}
       />

     </div>

               
<Switch>
{/* <Route path="/" exact component={App} /> */}


<Route path="/:id" exact  component={OneCountry}/>

</Switch>
     
    </BrowserRouter>
     )
  }
}
 
export default App ;
