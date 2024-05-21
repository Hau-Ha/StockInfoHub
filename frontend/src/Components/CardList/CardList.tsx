import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import {v4 as uuidv4} from "uuid";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate : (e:SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults ,onPortfolioCreate }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <Card key={uuidv4()} id={result.symbol} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                ))
            ) : (
                <h1>No result</h1>
            )}
        </>
    );
};

export default CardList;
