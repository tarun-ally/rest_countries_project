import React, { Component } from "react";
import {FiArrowLeft} from 'react-icons/fi';

import {CountryDetailsContent} from './countryDataStructure';


class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      loaded: false,
      alpha3Code: "",
    };
  }

  updatingAlphaCode(element) {
    this.setState({
      alpha3Code: element,
    });
  }

  getCountry(){
    let id = this.props.match.params.id;
      fetch(`https://restcountries.com/v2/alpha/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            country: data,
            loaded: true,
          });
        });

  }

  componentDidMount() {
  this.getCountry()
  }
  componentDidUpdate(prevProps){
      console.log(this.props.match.params.id,prevProps.match.params.id,'sexy')
      if(this.props.match.params.id!==prevProps.match.params.id){
        this.getCountry()

      }
    }



  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <p>please stop</p>;
    }

    return (
      <div>
          
          <div className='backButton'>

          <button class="btn btn-white" class="shadow px-3 x-5 bg-white rounded" onClick={this.props.history.goBack}> <FiArrowLeft/> Back</button>
        </div >

        <CountryDetailsContent 
        nativeName={this.state.country.nativeName}
        name = {this.state.country.name}
        flag={this.state.country.flags.png}
        region= {this.state.country.region}
        subregion= {this.state.country.subregion}
        population= {this.state.country.population}
        capital= {this.state.country.capital}
        topLevelDomain={this.state.country.topLevelDomain}
        currencies= {this.state.country.currencies[0].name}
        languages={this.state.country.languages}
         borders= {this.state.country.borders}
        />

      </div>
    );
  }

}
export default CountryDetails;
