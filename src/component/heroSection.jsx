import React, { Component } from "react";
import OneCountry from "./anyOneCountry";
import{BrowserRouter,Link, Route, Switch} from 'react-router-dom';



class HeroSec extends React.Component {

  countryDetail = (key) => {
    // if(this.state.index){
      console.log(key);
      // this.setState({ index: false })
    // }
this.props.countryDetails(key)
  }
  render() {
    // console.log(this.props.content, "tr");
    // {console.log(this.props.content.allCountryDisplay,'re')}

    return (
      <div className="mainDiv" style={{ backgroundColor: "yellow" }}>
        <div
          className="allCountry"
          //   index={index}
          style={{
            display: this.props.content.allCountryDisplay,
            display: "grid",
            backgroundColor: "green",
            width: "100%",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            // cursor: 'pointer',
            gridGap: '50px',
          }}
          // onClick=
        >

          {this.props.content.items
            .filter((val) => {
              // console.log(val.name,'nut')
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

              //   else if (val.region.includes(this.props.content.regionValue)) {
              //     return val;
              //   }

              //   if()
            })
            .map((item, index) => (
              <div className="country" key={index} countryIndex={index}
              style={{
                backgroundColor: "red",
                width: "70%",
                cursor: 'pointer',
              }}
              onClick={() => this.countryDetail(index)}
              // onClick={this.props.countryDetails} country={index}
              
              width="10%">

                {/* {console.log(document.getElementsByName('country').countryIndex,'nnnnn')} */}

                {/* console.log(index,'nut') */}
                <img src={`${item.flags.svg}`} alt="" width="30%" />
                <div>{item.name}</div>
              
                  <div>Population: {item.population}</div>
                  <div>Region: {item.region}</div>
                  <div>Capital: {item.capital}</div>
                  <div>Capital: {item.alpha3Code}</div>
              <Link to={`/${item.alpha3Code}`}  >
                  <button> pree</button>
            </Link>
           
              </div>
            ))}
        </div>
      </div>
      // </BrowserRouter>

    );
  }
}

export default HeroSec;
