import React from 'react'
import { Typography } from "@material-tailwind/react";
const Card = (props) => {
  return (
    <figure className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80   w-60">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={props.image}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h6" color="blue-gray">
            {props.text}
          </Typography>
          
        </div>
      </figcaption>
    </figure>
  );
}

export default Card
  {
    /* <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="brightness-50 object-cover w-full h-48" src={props.image} alt="Card Image"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">{props.text}</h4>
	</div>
  </div> */
  }