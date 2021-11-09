import React from "react";
// import HeroSec from './heroSection';
// import {useState} from 'react'

import {GoSearch} from 'react-icons/go';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';


class Search extends React.Component {
  render() {
    return (
      <div 
      
      style={{
        width: "100%",
        display: "flex",
        // backgroundColor: "orange",
        width: "100%",
        justifyContent:'space-between',
    }}>
      

        <div class="input-group rounded" style={{width:'25%', marginLeft:'70px'}} >
  <input type="text" class="form-control rounded"  value={this.props.inputValue}
          placeholder="Search for a country..."
          onChange={this.props.countryFilterOnChange} aria-label="Search"
  aria-describedby="search-addon" />

</div>

<div>

<Dropdown style={{ marginRight:'105px'}}>
  <Dropdown.Toggle variant="white" id="dropdown-basic">
    Filter by Region   
  </Dropdown.Toggle>

  <Dropdown.Menu   onClick={this.props.countryByRegion}>
  {this.props.filteredRegion.map((element, key) => {
    // console.log(element,'nappa');
    return <Dropdown.Item >{element}</Dropdown.Item>
    // <option>{element}</option>
  })}
   <Dropdown.Item >none</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  </div>
      </div>
    );
  }

  //   handleSearch = {};
}

export default Search;
