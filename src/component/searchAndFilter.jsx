import React, { Component } from "react";
// import HeroSec from './heroSection';
// import {useState} from 'react'

class Search extends React.Component {
  render() {
    return (
      <div 
      
      style={{
        width: "100%",
        // height: "200px",
        display: "grid",
        backgroundColor: "orange",
        width: "100%",
        gridTemplateColumns: "1fr 1fr 1fr",
        // backgroundColor: "yellow",
    }}>
        <input
          className="searchInput"
          type="text"
          value={this.props.inputValue}
          placeholder="Search for a country..."
          onChange={this.props.countryFilterOnChange}
        ></input>

        <div>Filter by Region</div>

        {/* {console.log((this.props.filteringContent.region),'2222')} */}
        <div
          className="regionCountry"
          style={{
            width: "40%",
            // height: "200px",
            backgroundColor: "yellow",
        }}


        onClick={this.props.countryByRegion}
        >
          {/* {console.log(this.props.filteringContent.region)} */}
          {this.props.filteringContent.region.map((element, key) => {
             
             return<div className="country" key={key} width="10%">
             {/* console.log(key,'nut') */}
             <div>{element}</div>
             {/* <div>
               <div>Population: {element.population}</div>
               <div>Region: {element.region}</div>
               <div>Capital: {element.capital}</div>
             </div> */}
           </div>
            }
          )}
        </div>
      </div>
    );
  }

  //   handleSearch = {};
}

export default Search;
