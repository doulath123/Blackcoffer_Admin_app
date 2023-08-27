import React, { useState} from "react";
import Records from "../records.json"
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Intensity",
    dataIndex: "intensity",
  },
  {
    title: "Likelihood",
    dataIndex: "likelihood",
  },
  {
    title: "Relevance",
    dataIndex: "relevance",
  },
  {
    title: "Year",
    dataIndex: "year",
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Topics",
    dataIndex: "topic",
  },
  {
    title: "Region",
    dataIndex: "region",
  },
];
const data=[];
const data1 = [];

for (let i = 0; i <Records.length; i++) {
  data1.push({
    key: i,
    intensity:Number(Records[i].intensity),
    likelihood:Number(Records[i].likelihood),
    relevance:Number(Records[i].relevance),
    year:`${Records[i].start_year}-${Records[i].end_year}`,
    country:Records[i].country,
    topic:Records[i].topic,
    region:Records[i].region
  });
  data.push({
    year:`${Records[i].start_year}-${Records[i].end_year}`,
    intensity:Number(Records[i].intensity),
    likelihood:Number(Records[i].likelihood),
    relevance:Number(Records[i].relevance),
  })
}



const config = {
  data,
  xField: "year",
  yField: "intensity",
  color: ({ type }) => {
    return "#7367F0";
  },
  label: {
    position: "middle",
    style: {
      fill: "#FFFFFF",
      opacity: 1,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    year: {
      alias: "Year",
    },
    intensity: {
      alias: "value",
    },
    likelihood: {
      alias: "value",
    },
    relevance: {
      alias: "value",
    },
  },
};

const Dashboard = () => {
  const [value, setValue]=useState("intensity");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  config.yField=value;
  
  
  
  return (
    <div>
      <h3 className="mb-4 title ">Dashboard</h3>
      
      <div className="mt-4">
        <h3 className="mb-5 title">Visualization Graph</h3>
        <select value={value} onChange={handleChange}>
          <option  value="intensity">Intensity</option>
          <option  value="likelihood">Likelihood</option>
          <option value="relevance">Relevance</option>
        </select>
        <div>
          <Column {...config} />





        
         
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Data Table</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;