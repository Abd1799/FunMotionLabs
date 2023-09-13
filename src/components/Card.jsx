import React from 'react'
import { Typography } from "@material-tailwind/react";
const Card = (props) => {
  return (
    <figure className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer md:h-80 md:w-60 w-60 h-60 ">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={props.image}
        alt="card"
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