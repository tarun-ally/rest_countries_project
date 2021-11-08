import React from "react";
import { Link } from "react-router-dom";

import { StructureData } from "./countryDataStructure";

class CountryList extends React.Component {
  render() {
    return (
      <div className="mainDiv" style={{ backgroundColor: "yellow" }}>
        {console.log(this.props.countries, "nivce")}

        <div
          className="allCountry"
          style={{
            display: "grid",
            backgroundColor: "white",
            width: "100%",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridGap: "50px",
            marginTop: "50px",
          }}
        >
          {this.props.countries.map((item, index) => (
            <Link to={`/${item.alpha3Code}`}>
              <div
                className="country"
                key={index}
                countryIndex={index}
                style={{
                  backgroundColor: "red",
                  width: "70%",
                }}
                width="10%"
              >
              
                {item.flags.svg != "undefined" && (
                  <StructureData

                    flags={item.flags.svg}
                    name={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CountryList;
