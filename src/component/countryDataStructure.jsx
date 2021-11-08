import React, { Component } from "react";

import { Link } from "react-router-dom";

class StructureData extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={`${this.props.flags}`} class="card-img-top" alt="..." />
      
          <div class="card-body">
            <h5 class="card-title">{this.props.name}</h5>
            <p class="card-text"> population: {this.props.population} </p>
            <p class="card-text"> Region: {this.props.region} </p>
            <p class="card-text"> Capital: {this.props.capital} </p>
          </div>
        </div>
      </div>
    );
  }
}

// export default ;
class CountryDetailsContent extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          backgroundColor: "white",
          width: "100%",
          gridTemplateColumns: "1fr 1fr 1fr",
          // gridGap: '50px',
          marginTop: "50px",
        }}
      >
        <div>
          <img src={`${this.props.flag}`} alt="" width="100%" />
        </div>
       

        <div>
          <div> {this.props.name}</div>
          <div>
            <p>Native Name: {this.props.nativeName}</p>
            <p>Population: {this.props.population}</p>
            <p>Region: {this.props.region}</p>
            <p>Sub Region: {this.props.subregion}</p>
            <p>Capital: {this.props.capital}</p>
            <p>Top Level Domain: {this.props.topLevelDomain}</p>
            <p>Currencies: {this.props.currencies}</p>

            <div>
              Languages: {console.log(this.props.languages[0].name, "hush")}
              {this.props.languages.map((element, index) => {
                // console.log(element.name, index, "hush");
                return (
                  <div>
                    <span>{element.name}</span>
                  </div>
                );
              })}
            </div>

            {this.props.borders && (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  width: "100%",

                  marginTop: "50px",
                }}
              >
                Border Country:
                {this.props.borders.map((element, index) => {
                  // console.log(element, index, "kush");
                  return (
                    <div>
                      <Link to={`/${element}`}>
                        <span> &nbsp;{element}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export { CountryDetailsContent, StructureData };
