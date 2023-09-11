import React from "react";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <Link to={`/singleblog/${props.id}`}>
      <div class="bg-[#334155] drop-shadow-2xl shadow-blue-gray-900/50 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-110">
        <div class="px-6 py-4">
          <div class="font-bold text-cyan-400 text-xl mb-2 truncate">
            {props.title}
          </div>
          <div className="text-xs text-gray-400 pb-5">
            Posted on: 12/01/2000
          </div>
          <p class="text-white text-base truncate">{props.introduction}</p>
        </div>

        <div class="px-6 pt-2 pb-2">
          <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #AI
          </span>
          <span class="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #Gaming
          </span>
        </div>
        <div className="flex flex-col">
          <button className="bg-blue-400 hover:bg-blue-700 p-2 rounded-none place-self-end cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
