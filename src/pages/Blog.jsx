import { Link } from "react-router-dom";
import Blog01 from "../assets/images/blog01.png";
import { ArrowRight } from "lucide-react";

function Blog() {
  const blogContent = [
    {
      title: "The Smartest Way to Stay Connected With Your Customers",
      description:
        "In today's fast-paced digital world, staying in touch with your customers is more important than ever. Email marketing is one of the easiest, most effective ways to build relationships, share updates, and drive sales.",
      img: Blog01,
    },
  ];

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="bg-[#F0F0F2]">
      <div className="bg-[#06348A] h-[346px] px-6 flex items-center justify-center">
        <div className="max-w-[627px] mx-auto">
          <h2 className="lg:text-[32px] text-2xl text-center font-bold text-[#F0F0F2] mb-5">
            <span
              className="text-[#F0F0F2] leading-[50px] inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              Blog
            </span>
          </h2>
        </div>
      </div>

      <div className="py-[77px] max-w-[1296px] mx-auto px-6 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {blogContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <img
                src={content.img}
                className="rounded-t-lg object-cover h-[162px] w-full"
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-normal px-3 my-3">
                  <div className="rounded-full bg-[#0A5FFA] w-2 h-2" />
                  <p className="text-[#0A5FFA]">5 min</p>
                </div>
                <div className="flex items-center gap-1 font-normal my-3">
                  <div className="rounded-full bg-[#0A5FFA] w-2 h-2" />
                  <p className="text-[#0A5FFA]">Feb 28, 2025</p>
                </div>
              </div>

              <h3 className="lg:text-xl text-lg font-medium text-[#5B5F6A] mb-1 px-3">
                {content.title}
              </h3>
              <h3 className="text-sm font-medium text-[#5B5F6A] mb-1 px-3">
                {content.description}
              </h3>
              <Link
                to={`/blog/${createSlug(content.title)}`}
                className="p-3 text-[#989BA3] text-sm lg:ext-base flex items-center gap-1"
              >
                Get Started
                <ArrowRight size={16} color="#989BA3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
