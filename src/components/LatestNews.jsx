import React from "react";
import { TypeAnimation } from "react-type-animation";
import NewsCard from "./NewsCard";
import blogs from "../Blogs/blogs.json";
import { Button } from "@material-tailwind/react";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        {/* Heading for mobile view */}
        <div>
          <h1 className="lg:hidden block md:text-4xl text-2xl mt-10 text-left ml-10  font-semibold">Latest Blogs</h1>
        </div>
        <div className="lg:flex justify-between mt-10 sm:ml-10 sm:mr-5">
          {/* Heading for desktop view */}
          <div className="lg:block hidden items-center text-left pt-28 pl-32">
            <h4 className="text-4xl font-semibold">Latest</h4>
            <TypeAnimation
              sequence={["News", 2000, "Blogs", 2000, "Posts", 2000]}
              wrapper="span"
              speed={50}
              className="text-cyan-400/100 font-semibold text-6xl"
              repeat={Infinity}
            />

            <div className="flex flex-col w-48">
              <Button className="bg-blue-400 hover:bg-blue-700 p-3 mt-10 rounded-none cursor-pointer shadow-lg shadow-blue-gray-900/50">
                See all Posts
              </Button>
            </div>
          </div>

          <div className="h-fit text-left lg:w-1/2 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mr-20 mb-20">
            <div className="lg:grid lg:grid-cols-2 gap-5">
              {blogs.blogs.map((item) => (
                <div>
                  <NewsCard
                    id={item.id}
                    title={item.title}
                    introduction={item.introduction}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
