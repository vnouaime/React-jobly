import React from "react"
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Shows some information about company.
 *
 * Rendered by company list to display card for each company. 
 *
 * CompanyList -> CompanyCard
 */

const CompanyCard = ({name, description, logoUrl, handle}) => {
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
          <div className="card-body">
            <h6 className="card-title">
              {name}
              {logoUrl && <img src={logoUrl}
                               alt={name}
                               className="float-right ml-5" />}
            </h6>
            <p><small>{description}</small></p>
          </div>
        </Link>
    );
}

export default CompanyCard