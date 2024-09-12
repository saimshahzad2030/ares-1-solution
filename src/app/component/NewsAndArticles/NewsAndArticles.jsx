// import React from "react";
// import { BLOGS } from "../../../../constants/constants";
// import Image from "../Image/Image";
// import { ARROW_RIGHT } from "../../../../constants/icons";
// import Link from "next/link";

// const NewsAndArticles = () => {
//   return (
//     <div className="relative lexend-deca-normal flex flex-col items-center w-full  py-8 md:py-24  px-4 lg:px-20">
//       <h1 className="text-darkTheme">News & Articles</h1>
//       <h2 className="text-darkBlack lexend-deca-bold text-[30px] sm:text-[40px] text-center">
//         Our Latest Blog Posts
//       </h2>
//       <div className="mt-12 grid grid-cols-3 w-full gap-8">
//         {BLOGS.map((blog, index) => (
//           <div key={index} className="group flex flex-col items-center w-full">
//             <Image
//               imageObject={{ src: blog.image, name: "image" }}
//               className={"w-full h-[200px] object-cover"}
//             />
//             <div
//               key={index}
//               className="group flex flex-col items-start w-10/12"
//             >
//               <h3 className="mt-8 lexend-deca-light text-[12px] text-darkTheme">{`
//                 ${blog.date} - ${blog.comments} comments
//               `}</h3>
//               <h2 className="lexend-deca-bold min-h-[50px] mt-2 text-darkBlack group-hover:text-lightTheme transition-colors duration-300">
//                 {blog.title}
//               </h2>
//               <p className="lexend-deca-light   mt-2 text-lightBlack min-h-[50px] text-[14px]">
//                 {blog.description}
//               </p>
//               <Link href={blog.url}>
//                 <Image
//                   imageObject={ARROW_RIGHT}
//                   className={"w-4 h-auto mt-4"}
//                 />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsAndArticles;
import React from "react";
import { BLOGS } from "../../../../constants/constants";
import Link from "next/link";
const ArrowRightIcon = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    className={className}
  >
    <path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewsAndArticles = () => {
  return (
    <div className="relative lexend-deca-normal flex flex-col items-center w-full py-8 md:py-24 px-4 lg:px-20">
      <h1 className="text-darkTheme">News & Articles</h1>
      <h2 className="text-darkBlack lexend-deca-bold text-[30px] sm:text-[40px] text-center">
        Our Latest Blog Posts
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8">
        {BLOGS.map((blog, index) => (
          <div
            key={index}
            className="group flex flex-col items-center w-full overflow-hidden"
          >
            {/* <img
              className="w-full h-[200px] object-cover  transition-transform duration-300 group-hover:scale-110"
              src={blog.image}
              alt="Blog"
            /> */}
            <div className="relative w-full h-[250px] md:h-[200px] overflow-hidden">
              <img
                className="absolute inset-0 w-full h-[250px] md:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                src={blog.image}
                alt="Blog"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
            </div>
            <div
              key={index}
              className="group flex flex-col items-start w-10/12"
            >
              <h3 className="mt-8 lexend-deca-light text-[12px] text-darkTheme">
                {`${blog.date} - ${blog.comments} comments`}
              </h3>
              <h2 className="lexend-deca-bold min-h-[50px] mt-2 text-darkBlack group-hover:text-lightTheme transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="lexend-deca-light mt-2 text-lightBlack min-h-[50px] text-[14px]">
                {blog.description}
              </p>
              <Link href={blog.url} className="group-hover:text-blue-500">
                <ArrowRightIcon className="w-4 h-auto mt-4 fill-current" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndArticles;
