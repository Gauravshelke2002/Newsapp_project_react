import React from "react";
import "./Card.css";

export const Card = ({ data }) => {
  return (
    <>
    
      <div
        className="card mt-2 bg-dark  text-light mb-3 d-inline-block mx-4 px-2 py-2 ml-2"
        style={{ maxWidth: "320px" }}
      >
        <img
          src={data.urlToImage ? data.urlToImage:"/public/News1.jpg" }
          style={{ height: "200px", width: "100%" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.title.slice(0, 50)}</h5>
          <p className="card-text">
            {data.description ? data.description.slice(0, 100) : "lorem"}{" "}
          </p>
          <a href={data.url} target="_blank" className="btn btn-light mt-2">
            Go somewhere
          </a>
        </div>
      </div>
     
    </>
  );
};
