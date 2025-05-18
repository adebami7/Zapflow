import BlogCard from "../components/BlogCard";
import image from "../assets/images/blog1.svg"; 

const blogPosts = new Array(8).fill({
  image,
  tag: "Email Marketing",
  time: "5 min",
  date: "Feb 28, 2025",
  title: "The Smartest Way to Stay Connected With Your Customers using advanced strategies",
  description: `In today’s fast-paced digital world, staying in touch with your customers is more important than ever. Email marketing is one of the easiest, most effective ways to build relationships, share updates, and drive sales.`,
});

const Blog = () => {
  return (
    <div className="bg-[#F7F8Fc]">
      <section className="px-6 md:px-16 py-10">
        {/* Header */}
         <div className="flex justify-center items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-[#5B5F6A] text-center">
            <span
            className="text-[#5b5f6a] rounded inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
            }}
          >
            Blog
          </span></h1>
        </div>

       
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg md:text-xl font-medium text-[#5B5F6A]">
            Latest Articles
          </h2>

          <button className="px-4 py-2 border border-[#0A5FFA]-300 rounded-full text-[#0A5FFA] text-sm flex items-center gap-2 hover:bg-gray-50">
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>


        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
