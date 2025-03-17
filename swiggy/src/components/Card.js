import React from "react";
import { CDN_IMAGANARY_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, locality, avgRatingString } = resData.info;
  console.log(resData);
  return (
    <div className="cardItem">
      <img
        width={100}
        alt="image"
        src={CDN_IMAGANARY_URL + resData.info.cloudinaryImageId}
      />
      <h2 className="cardName">{name}</h2>
      <h4 className="cardName">{cuisines.join(", ")}</h4>
      <span>{locality}</span>
      <p>
        <strong>{avgRatingString} Star</strong>
      </p>
    </div>
  );
};

export default Card;
