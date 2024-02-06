import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

/** Show some information about a job.
 *
 * Rendered by JobCardList to show card for each job.
 *
 * Receives apply func prop from parent, which is called on apply.
 *
 * JobCardList -> JobCard
 */

function JobCard({ id, title, salary, equity, companyName }) {

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(function updateAppliedStatus() {

    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
      <div className="JobCard card"> {applied}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{companyName}</p>
          {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
  );
}

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}


export default JobCard;
