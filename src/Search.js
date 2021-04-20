import React from "react";
import axios from "axios";

import CountryCard from "./CountryCard";

class Search extends React.Component {
  state = {
    searchTerm: "",
    result: [],
    savedCountries: [],
  };

  handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`
      );

      this.setState({ result: [...response.data] });
      //   console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddCountry = (country) => {
    const newSavedList = [...this.state.savedCountries, country];
    this.setState({ savedCountries: newSavedList });
  };

  handleDelete = (name) => {
    const filteredList = this.state.savedCountries.filter(
      (country) => country.name !== name
    );
    // console.log(name, this.state.savedCountries, filteredList);
    this.setState({ savedCountries: filteredList });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center flex-column m-5">
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Search Country
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="d-flex justify-content-between m-3">
          <div className="border p-3">
            <h2>Search Results</h2>
            {this.state.result.map((country) => {
              return (
                <div className="container">
                  <CountryCard
                    flag={country.flag}
                    name={country.name}
                    region={country.region}
                    handleAddCountry={this.handleAddCountry}
                  />
                </div>
              );
            })}
          </div>
          <div className="border p-3">
            <h2>Saved Countries</h2>
            {this.state.savedCountries.map((country) => {
              return (
                <div className="container">
                  <CountryCard
                    flag={country.flag}
                    name={country.name}
                    region={country.region}
                    handleDelete={this.handleDelete}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
