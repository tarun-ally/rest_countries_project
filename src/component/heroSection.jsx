import React, { Component } from "react";
import{BrowserRouter,Link, Route, Switch} from 'react-router-dom';

class HeroSec extends React.Component {

  render() {

    return (
      <div className="mainDiv" style={{ backgroundColor: "yellow" }}>
        <div
          className="allCountry"
          style={{
            display: "grid",
            backgroundColor: "white",
            width: "100%",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridGap: '50px',
          }}
        >

          {this.props.content.items
            .filter((val) => {
              if (
                this.props.content.inputValue == "" &&
                this.props.content.regionValue == ""
              ) {
                console.log(this.props.content.inputValue, "Ok");
                return val;
              } else if (
                this.props.content.inputValue !== "" &&
                this.props.content.regionValue == ""
              ) {
                if (
                  val.name
                    .toLowerCase()
                    .includes(this.props.content.inputValue.toLowerCase())
                ) {
                  console.log(this.props.content.inputValue, "knock");
                  return val;
                }
              } else if (
                this.props.content.inputValue == "" &&
                this.props.content.regionValue !== ""
              ) {
                if (
                  val.region
                    .toLowerCase()
                    .includes(this.props.content.regionValue.toLowerCase())
                ) {
                  console.log(this.props.content.inputValue, "knock");
                  return val;
                }
              }
           
            })
            .map((item, index) => (
              <div className="country" key={index} countryIndex={index}
              style={{
                backgroundColor: "red",
                width: "70%",
                // cursor: 'pointer',
              }}
              
              width="10%">


                <img src={`${item.flags.svg}`} alt="" width="30%" />
                <div>{item.name}</div>
              
                  <div>Population: {item.population}</div>
                  <div>Region: {item.region}</div>
                  <div>Capital: {item.capital}</div>
                  <div>Capital: {item.alpha3Code}</div>
              <Link to={`/country/${item.alpha3Code}`}>
                  <button> Click to see country detail</button>
            </Link>
           
              </div>
            ))}
        </div>
      </div>

    );
  }
}

export default HeroSec;
