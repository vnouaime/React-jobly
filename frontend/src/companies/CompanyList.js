import React from "react";
import { useState, useEffect } from "react";
import JoblyApi from "../api/api"
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";

const CompanyList = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
      async function getCompanies() {
        search();
      }
      getCompanies()
    }, [])

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <div className="CompanyList col-md-8 offset-md-2">
          <SearchForm searchFor={search} />
          {companies.length
              ? (
                  <div className="CompanyList-list">
                    {companies.map(c => (
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                    ))}
                  </div>
              ) : (
                  <p className="lead">Sorry, no results were found!</p>
              )}
        </div>
    );
    
}

export default CompanyList;