import React from "react";
import { Link } from "react-router-dom";

import { StructureData } from "./countryDataStructure";
import './country.css';
class CountryList extends React.Component {
  render() {
    if(this.props.countries[0]==='search not found'){
      return <div className="searchNotFound">Search not found</div>;
    }
    return (
      <div className="mainDiv" >
        {/* {console.log(this.props.countries, "nivce")} */}

        <div
          className="allCountry"

         
        >

          {console.log(this.props.countries[0])}
          { this.props.countries.map((item, index) => (
            
            <div
                className="country"
                key={index}
                countryIndex={index}
                style={{
                  // backgroundColor: "red",
                  width: "90%",
                }}
                width="10%"
              >
              
                {item.flags.svg != "undefined" && (
                <Link to={`/${item.alpha3Code}`} className='link'>
                  <StructureData

                    flags={item.flags.png}
                    name={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    />
                    </Link>
                )}
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CountryList;
