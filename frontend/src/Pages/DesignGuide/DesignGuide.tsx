import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany, testIncomeStatementData } from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];


const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
      
      </h1>
      <RatioList config={tableConfig} data={testIncomeStatementData} />
      <Table config={tableConfig} data={data} />
      <h3>
      
      </h3>
    </>
  );
};

export default DesignGuide;