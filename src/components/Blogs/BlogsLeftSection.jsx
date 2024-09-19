import React from "react";
import { BLOGS } from "../../../constants/constants";
import { ArrowRightIcon } from "../NewsAndArticles/NewsAndArticles";
import Link from "next/link";
import Image from "../Image/Image";
import { USER_LOGO } from "../../../constants/icons";
import { User } from "../../../public/assets/user.svg";
import { Clock } from "../../../public/assets/clock.svg";

const BlogsLeftSection = () => {
  return (
    <div className="col-span-6 lg:col-span-4 w-full flex flex-col items-start ">
      {BLOGS.map((blog, index) => (
        <div
          key={index}
          className="mb-2 sm:mb-12 group flex flex-col items-center w-full "
        >
          <div className="rounded-t-3xl relative w-full h-auto sm:h-[350px] lg:h-[500px] sm:overflow-hidden">
            <img
              className=" sm:absolute inset-0 w-full h-auto sm:h-[350px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
              src={blog.image}
              alt="Blog"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          </div>
          <div
            key={index}
            className="hover:dark:shadow-white-shadow hover:shadow-black-shadow group flex flex-col items-start w-full sm:px-8 py-8 rounded-b-3xl transition-shadow duration-500"
          >
            <h2 className="w-full text-[20px] sm:text-[24px]  lexend-deca-normal min-h-[50px] text-darkBlack dark:text-white hover:text-lightTheme transition-colors duration-300 cursor-pointer">
              {blog.title}
            </h2>
            <div className="mt-4 sm:mt-0 dark:text-white flex flex-col sm:flex-row items-start sm:items-center w-full ">
              <div className="mt-2 sm:mt-0 flex flex-row items-center mr-8">
                <User className={" mr-2 w-4 h-auto  "} />
                <p className=" ">By&nbsp; </p>
                <p className="text-lightBlack">{blog.by} </p>
              </div>
              <div className="mt-2 sm:mt-0 flex flex-row items-center ">
                <Clock className={" mr-2 w-4 h-auto  "} />
                <p className="text-lightBlack">
                  {`${blog.date} - ${blog.comments} comments`}
                </p>
              </div>
            </div>

            <p className="lexend-deca-light mt-2 sm:mt-5 text-lightBlack text-justify w-full line-clamp-4">
              {blog.description}
            </p>
            <Link
              href={blog.url}
              className="mt-2 sm:mt-4 dark:text-white group-hover:text-lightTheme"
            >
              Readmore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsLeftSection;
