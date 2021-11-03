import React, { Component } from "react";
import { withRouter , Link } from "react-router-dom";

class OneCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      loaded:false
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(json, "kiara");

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
    // console.log(this.state.country);
    console.log("countryy", this.state.country.borders, "champa");
    if(this.state.country.borders == undefined ){

    return (
      <div>
        <h1>{this.state.country.name}</h1>
        <div>
        <img
              src={`${this.state.country.flag}`}
              alt=""
              width="30%"
            />

        </div>
<h1>hello</h1>
      <div>

        hiii
          <div> {this.state.country.name}</div>
          <div>
            <p>{this.state.country.nativeName}</p>
            <p>{this.state.country.population}</p>
            <p>{this.state.country.region}</p>
            <p>{this.state.country.subregion}</p>
            <p>{this.state.country.capital}</p>
            <p>{this.state.country.topLevelDomain}</p>
            <p>{this.state.country.currencies[0].name}</p>

            <div >{ console.log(this.state.country.languages[0].name,'hush')}
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
        <h1>{this.state.country.name}</h1>
        <div>
        <img
              src={`${this.state.country.flag}`}
              alt=""
              width="30%"
            />

        </div>
<h1>hello</h1>
      <div>

        hiii
          <div> {this.state.country.name}</div>
          <div>
            <p>{this.state.country.nativeName}</p>
            <p>{this.state.country.population}</p>
            <p>{this.state.country.region}</p>
            <p>{this.state.country.subregion}</p>
            <p>{this.state.country.capital}</p>
            <p>{this.state.country.topLevelDomain}</p>
            <p>{this.state.country.currencies[0].name}</p>

            <div >{ console.log(this.state.country.languages[0].name,'hush')}
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
              return <div>
                  <Link to={`/${element}` }  > 
                  
                <span>{element}</span>
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

// export default OneCountry;

export default withRouter(OneCountry);
