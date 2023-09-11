import React, { useEffect, useState } from "react";
import blogs from "../Blogs/blogs.json";
import { useParams } from "react-router-dom";


const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState();
  const { id } = useParams();
  const parsedBlogId = parseInt(id, 10);

  useEffect(() => {
       const foundBlog = blogs.blogs.find(
         (blog) => blog.id === parsedBlogId
       );

       if (foundBlog) {
         setSingleBlog(foundBlog);
         console.log(foundBlog);
       } else {
         console.error("Blog not found");
       }
   
  }, [parsedBlogId]);
  console.log(singleBlog?.title.length);

  return (
    <div className="static w-full h-full flex justify-center items-center">
      <div className="z-20 absolute text-left w-[1000px] top-80 ">
        <h2 className="text-xl text-gray-400">Posted my FunMotionLabs</h2>
        {singleBlog?.title.length >= 100 ? (
          <h1 className="text-2xl font-bold pt-4 pb-4">{singleBlog?.title}</h1>
        ) : (
          <h1 className="text-6xl font-bold pt-4 pb-4">{singleBlog?.title}</h1>
        )}

        <h2 className="text-xl text-gray-400">
          {singleBlog?.sections[0].title}
        </h2>
      </div>
      <div className="z-20 top-2/3 rounded-lg absolute w-full md:w-[1000px] h-full bg-[#1f2937] p-10 pb-20 overflow-scroll">
        <div className="grid grid-cols-2">
          <div className="text-left">
            <h2 className="text-sm text-gray-400">Posted on 01/01/2001</h2>
          </div>
        </div>
        {/* Introduction section */}
        <section className="text-left text-xl pt-10">
          <h2>{singleBlog?.introduction}</h2>
        </section>
        {/* Blog sections */}

        {singleBlog?.sections.map((item) => (
          <section className="text-left pt-10">
            <h1 className="text-4xl font-semibold pt-5 pb-5">{item?.title}</h1>
            <h4 className="text-base text-gray-400">{item?.content}</h4>
          </section>
        ))}
      </div>
      <img
        className="z-10 w-full brightness-50"
        src={`/assets/images/blog${parsedBlogId}.png`}
        alt="Background Image"
      />
    </div>
  );
};

export default SingleBlog;
