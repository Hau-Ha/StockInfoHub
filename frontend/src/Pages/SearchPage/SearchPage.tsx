import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
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
    <div>    
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
    /></div>
  )
}

export default SearchPage