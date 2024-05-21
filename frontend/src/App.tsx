import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  const [search, setSearch] = useState("");
  const [portfolioValue, setPortfolioValue] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValue.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValue, e.target[0].value];
    setPortfolioValue(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValue.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValue(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
}

export default App;
