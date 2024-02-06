import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("smoke test", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <CompanyDetail />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
            <Routes>
                <Route path="/company/:handle" element={<CompanyDetail />}>
                </Route>
            </Routes>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});