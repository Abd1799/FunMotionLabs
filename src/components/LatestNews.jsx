import React from "react";
import { TypeAnimation } from "react-type-animation";
import NewsCard from "./NewsCard";
import blogs from "../Blogs/blogs.json"

const LatestNews = () => {
  return (
    <div className="flex justify-between  mt-10">
      <div className="invisible lg:visible visibility:collapse items-center text-left pt-28 pl-32">
        <h4 className="text-4xl font-semibold">Latest</h4>
        <TypeAnimation
          sequence={["News", 2000, "Blogs", 2000, "Posts", 2000]}
          wrapper="span"
          speed={50}
          className="text-cyan-400/100 font-semibold text-6xl"
          repeat={Infinity}
        />
        <div className="flex flex-col w-48">
          <button className="bg-blue-400 hover:bg-blue-700 p-2 mt-10 rounded-none cursor-pointer shadow-lg shadow-blue-gray-900/50">
            See all Posts
          </button>
        </div>
      </div>

      <div className=" h-fit text-left w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mr-20 mb-20">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <NewsCard
              id={blogs.blogs[0].id}
              title={blogs.blogs[0].title}
              introduction={blogs.blogs[0].introduction}
            />
          </div>
          <div>
            <NewsCard
              id={blogs.blogs[1].id}
              title={blogs.blogs[1].title}
              introduction={blogs.blogs[1].introduction}
            />
          </div>
          <div>
            <NewsCard
              id={blogs.blogs[2].id}
              title={blogs.blogs[2].title}
              introduction={blogs.blogs[2].introduction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
