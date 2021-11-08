import React from 'react';

// import './App.css';

import CountryList from './component/countryList';
import Search from './component/searchAndFilter';

class Home  extends React.Component {

  state ={
        items:[],
        inputValue:'',
        countryName:'',
        DataisLoaded:false,
        region:[],
        regionValue: 'none',

    };

  handleCountrySearch =(event)=>{

    this.setState({
      inputValue: event.target.value,
      countryName:event.target.value,
    })
  }

  countryFilterByRegion=(event)=>{
    this.setState({
      regionValue:event.target.innerText,

    })
  }

  handleSearchCountry=()=>{
    const result = this.state.items.filter((val) => {
      if (
        this.state.countryName == ""
      ) {
      return val;
    }else if( 
      val.name
      .toLowerCase()
      .includes(this.state.countryName.toLowerCase())
    ){
      return val;
    }
    
    })
    return result;
  }

  handleFilterByRegion=(value)=>{
    let flag=0;
    const regions =value.filter((val) => {
      if ( this.state.regionValue == "none" ) {
        flag+=1;
        return val;
      }
        else if( 
          val.region
          .toLowerCase()
          .includes(this.state.regionValue.toLowerCase())
          ){
            flag+=1;
            return val;
          }
      }).map((num)=>num)
return regions;

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
    const{ dataisLoaded } = this.state;
    if(!dataisLoaded)return(<div>
        <p>please wait...</p></div>);
      const region =   new Set(this.state.items.map(country => country.region ))
      return(
        
        <div>
     <Search

        countryFilterOnChange={this.handleCountrySearch}
        filteredRegion = {[...region]}
        countryByRegion ={this.countryFilterByRegion}
     />
      <CountryList 
      countryDetails={this.countryDetails}
      countries = {this.handleFilterByRegion(this.handleSearchCountry())}
      />
     </div>
     )
  }
}
 
export default Home ;
