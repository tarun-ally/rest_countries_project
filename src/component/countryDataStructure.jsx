import React, { Component } from "react";

import { Link } from "react-router-dom";

import './country.css';
class StructureData extends Component {
  render() {
    return (
      <div className=''>
        {/* style={{ width: "18rem" }} */}
        <div class="card" >
          <img src={`${this.props.flags}`} class="card-img-top"  alt="..." height= '50%'  />
     
          <div class="card-body">
            <h6 class="card-title"> <b> {this.props.name}</b></h6>
            <div className="wrapperContent">


            <p class="card-text"> <b> Population:</b> {this.props.population} 
            <br/> <b> Region:</b> {this.props.region} 
            <br/> <b>Capital:</b> {this.props.capital} 
            
            </p>
            </div>
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
      <div className="countrySection"

      >
        <div >
          <img src={`${this.props.flag}`} alt="" width="80%" height="100%"  />
        </div>
       

        <div>
          <div className = "singleCountryName"><h3> <b>{this.props.name}</b></h3></div>
          <div className="singleCountryContent">
            <p> <b> Native Name: </b> {this.props.nativeName}</p>
            <p> <b> Population: </b> {this.props.population}</p>
            <p> <b> Region: </b> {this.props.region}</p>
            <p> <b> Sub Region: </b> {this.props.subregion}</p>
            <p> <b> Capital: </b> {this.props.capital}</p>
            <p> <b> Top Level Domain: </b> {this.props.topLevelDomain}</p>
            <p> <b> Currencies: </b> {this.props.currencies}</p>

            <div className="countryDetailLanguage">
            <b>Languages:</b> {console.log(this.props.languages[0].name, "hush")}
              {this.props.languages.map((element, index) => {
                // console.log(element.name, index, "hush");
                if(index!=0){

                  return (
                    <span>, {element.name}</span>
                    );
                  }else{
                    return (
                      <span> &nbsp;{element.name}</span>
                      );
                  }
              })}
            </div>
              </div>
              <div>
            {this.props.borders && (
              <div className="borderCountry"
                style={{
                  display: "flex",
                  width: "100%",

                  marginTop: "50px",
                }}
              >
              <b>  Border Country:</b>
                {this.props.borders.map((element, index) => {
                  // console.log(element, index, "kush");
                  return (
                    <div>
                      <Link to={`/${element}`}>
                        <button className="borderButton"> {element}</button>
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
