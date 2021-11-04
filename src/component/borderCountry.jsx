import React, { Component } from "react";
import { withRouter , Link } from "react-router-dom";

class BorderCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      loaded:false,
      alpha3Code:''
    };
  }
updatingAlphaCode(element){
console.log(element,'mouse')
this.setState({
  alpha3Code:element,
})

}
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          country:data,
          loaded:true
        });
      });
  }

  render() {
    const{loaded}=this.state;
    if(!loaded){
      return <p>please stop</p>
    }
    console.log("countryy", this.state.country.borders, "champa");
    if(this.state.country.borders == undefined ){

    return (
      <div>

<div>
        {/* <Link to='/'> */}
        <button onClick={this.props.history.goBack}>
        Back
      </button>
      {/* </Link> */}

        </div>

        <h1>{this.state.country.name}</h1>
        <div>
        <img
              src={`${this.state.country.flag}`}
              alt=""
              width="30%"
            />

        </div>
      <div>

          <div> {this.state.country.name}</div>
          <div>
          <p>Native Name: {this.state.country.nativeName}</p>
            <p>Population: {this.state.country.population}</p>
            <p>Region: {this.state.country.region}</p>
            <p>Sub Region: {this.state.country.subregion}</p>
            <p>Capital: {this.state.country.capital}</p>
            <p>Top Level Domain: {this.state.country.topLevelDomain}</p>
            <p>Currencies: {this.state.country.currencies[0].name}</p>

            <div >Languages: { console.log(this.state.country.languages[0].name,'hush')}
            {this.state.country.languages.map((element,index)=>{
              console.log(element.name,index,'hush')
              return <div>
                <span>{element.name}</span>
              </div>
            }
            )}</div>
          </div>
      </div>
      </div>
    );
  }else {

    return (
      <div>


<div>
        {/* <Link to='/'> */}
        <button onClick={this.props.history.goBack}>
        Back
      </button>
      {/* </Link> */}

        </div>
        <h1>{this.state.country.name}</h1>
        <div>
        <img
              src={`${this.state.country.flag}`}
              alt=""
              width="30%"
            />

        </div>
      <div>

        
          <div> {this.state.country.name}</div>
          <div>
          <p>Native Name: {this.state.country.nativeName}</p>
            <p>Population: {this.state.country.population}</p>
            <p>Region: {this.state.country.region}</p>
            <p>Sub Region: {this.state.country.subregion}</p>
            <p>Capital: {this.state.country.capital}</p>
            <p>Top Level Domain: {this.state.country.topLevelDomain}</p>
            <p>Currencies: {this.state.country.currencies[0].name}</p>

            <div >Languages: { console.log(this.state.country.languages[0].name,'hush')}
            {this.state.country.languages.map((element,index)=>{
              console.log(element.name,index,'hush')
              return <div>
                <span>{element.name}</span>
              </div>
            }
            )}</div>

<div >{ console.log(this.state.country.borders.length,'mush')}
            {this.state.country.borders.map((element,index)=>{
              console.log(element,index,'kush')
              return <div   >
                  <Link to={`/country/${element}`}    > 
                  
                <span onClick = {() => this.forceUpdate}>{element}</span>
                  </Link>
              </div>
              
            }
            )}</div>
          </div>
      </div>
      </div>
    );
  }

  }
}
export default (BorderCountry);
