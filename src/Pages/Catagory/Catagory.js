import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../Shared/NewsSummeryCard/NewsSummeryCard";

const Catagory = () => {
  const catagoryNews = useLoaderData();
  return (
    <div>
      <h2>this is catagory with {catagoryNews.length} news!</h2>
      {catagoryNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Catagory;
