import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import BlogsFlow from "../../components/home/blogsFlow";
import TrendingBlogsDesk from "../../components/home/trendingBlogs";
import Hero from "../../components/home/hero";

const Home = () => {
  const { logSuccess } = useContext(AppContext);

  return (
    <div className="w-full h-full mx-auto container  ">
      <div className="mt-16">
        {!logSuccess ? (
          <div className="grid grid-row-2 gap-6">
            <div className="border-b-[1px] xl:mx-0 mx-4 pb-2">
              <Hero />
            </div>
            <div className="border-b-[1px]">
              <TrendingBlogsDesk />
            </div>
          </div>
        ) : null}
      </div>

      <div className="w-full h-full grid xl:grid-cols-8 grid-cols-1 gap-4 ">
        <div className="order-2 xl:order-none xl:col-span-5 pt-10 ">
          <BlogsFlow />
        </div>

        <div className="border-l-[1px] order-1 xl:order-none xl:col-span-3 bg-[#FFFFFF] pt-20">
          <p className="xl:sticky xl:top-0 m-4">
            Discover more of what matters to you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
