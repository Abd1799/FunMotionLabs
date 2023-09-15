import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

const NewsCard = (props) => {
  return (
    <Link to={`/singleblog/${props.id}`}>
      <div className="bg-[#334155] drop-shadow-2xl shadow-blue-gray-900/50 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-110 mt-4 mb-4 lg:mt-0 lg:mb-0">
        <div className="px-6 py-4">
          <div className="font-bold text-cyan-400 text-xl mb-2 truncate">
            {props.title}
          </div>
          <div className="text-xs text-gray-400 pb-5">
            Posted on: 15/09/2023
          </div>
          <p className="text-white text-base line-clamp-3">{props.introduction}</p>
        </div>

        <div className=" flex px-6 pt-2 pb-2">
          {props.tags.map((item) => (
            <Chip value={item} className="rounded-full m-1" color="blue-gray" />
          ))}
        </div>
        <div className="flex flex-col">
          <Button className="bg-blue-400 hover:bg-blue-700 p-4 rounded-none place-self-end cursor-pointer">
            Read More
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
