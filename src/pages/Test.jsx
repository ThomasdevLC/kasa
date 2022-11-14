import React, { useEffect } from "react";
import HouseList from "../list/HouseList.json";

const test = () => {
  let house = HouseList.find((h) => h.id === "b9123946");

  console.log(house);

  return <div></div>;
};

export default test;
