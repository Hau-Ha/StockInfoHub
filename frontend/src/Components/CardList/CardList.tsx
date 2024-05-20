import React from 'react';
import Card from '../Card/Card';
import { CompanySearch } from '../../company';
import {v4 as uuidv4} from "uuid";

interface Props {
    searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <Card key={uuidv4()} id={result.symbol} searchResult={result} />
                ))
            ) : (
                <h1>No result</h1>
            )}
        </>
    );
};

export default CardList;
