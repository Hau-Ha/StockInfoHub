import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddProtfolio from "../Portfolio/AddPortfolio/AddProtfolio";

interface Props {
id: string;
searchResult: CompanySearch;
onPortfolioCreate : (e:SyntheticEvent) => void;
};

const Card: React.FC<Props>= ({id , searchResult , onPortfolioCreate}: Props): JSX.Element => {
  return (
  <div className="card">
      <div className="details">
        <img src="" alt="company Logo" />
        <h2>{searchResult.name} {searchResult.symbol}</h2>
        <p>${searchResult.currency}</p>
      </div>
      <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
     <AddProtfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} /> 
    </div>
  );
};

export default Card;
