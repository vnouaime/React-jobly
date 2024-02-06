import React, { useState } from "react";
import "./SearchForm.css";

/** Search Form
 * 
 * Used on CompanyList and JobList to filter down the results. 
 * This is just the search form which calls the prop searchFor 
 * from parent to actually do the searching. 
 * 
 * Props: 
 * searchFor
 * 
 * State: 
 * searchTerm
 * 
 * { CompanyList, JobList } -> SearchForm
 */
const SearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div className="SearchForm mb-4">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
