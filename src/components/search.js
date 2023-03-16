import React, { useState } from "react";
import "./search.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedCountries, setSuggestedCountries] = useState([]);

  const countries = ["India", "Sri Lanka", "Canada"];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(value)
    );
    setSuggestedCountries(filteredCountries);
    setSearchTerm(value);
  };

  return (
    <div className="search-bar"> {/* Add class name to outer div */}
      <input 
        className="search-placeholder"
        type="text"
        placeholder="Search country"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {suggestedCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
