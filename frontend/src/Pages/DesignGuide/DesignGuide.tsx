import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { TestDataCompany } from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
      
      </h1>
      <RatioList config={tableConfig} data={data} />
      <Table config={tableConfig} data={data} />
      <h3>
      
      </h3>
    </>
  );
};

export default DesignGuide;