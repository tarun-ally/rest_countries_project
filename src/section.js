import React, { Component } from 'react';
import './App.css';
import HeroSec from './component/heroSection';
import Search from './component/searchAndFilter';



class SectionApp  extends React.Component {

 
    state ={
        items:[],
        inputValue:'',
        DataisLoaded:false,
        region:[],
        regionValue: '',
        // indexForCountry:0,

    };

countryFilterOnChange =(event)=>{

  this.setState({
    inputValue: event.target.value,
    regionValue:''
  })
}

countryFilterByRegion=(event)=>{
console.log(event.target.innerText,'start');
  this.setState({
    regionValue:event.target.innerText,
    inputValue:''

  })
}

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

      items.map(c=>{
        if(!this.state.region.includes(c.region)){
          this.state.region.push(c.region)
        }
      }) 
      
return(

    <div>
     <Search
        countryFilterOnChange={this.countryFilterOnChange}
        
        filteringContent = {this.state}
        
        countryByRegion ={this.countryFilterByRegion}
     />
 
      <HeroSec 
      content= {this.state}
      countryDetails={this.countryDetails}
      />

     </div>
     )
  }
}
 
export default SectionApp ;
