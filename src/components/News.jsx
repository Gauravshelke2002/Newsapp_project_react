import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Card.css";


export const News = ({category}) => {
  const [newsData, setNewsData] = useState([]);


  const getData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();
      // console.log(data.articles);
      setNewsData(data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <>
      <h2 className="text-center mt-5 " style={{fontFamily:"sans-serif",fontSize:"40px",fontWeight:"700",color:"red"}}>Latest News</h2>
         <div className="container mt-5">
          <div className="row">
            <div className="col News-col">
            {newsData.map((news, i) => {
              return <Card key={i} data={news} />;
            })}
          
            </div>
          </div>
         </div>
        
           
      
      
    </>
  );
};