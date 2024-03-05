import { useContext } from "react";
import TrendingCard from "./card";
import { RiseOutlined } from "@ant-design/icons";
import { AppContext } from "../../../context/ContextProvider";
import { useTrendingBlogData } from "../../../api/services/trendingBlogs";
import dayjs from "dayjs";

const TrendingBlogsDesk = () => {
  const { logSuccess } = useContext(AppContext);
  const { data: trending }: any = useTrendingBlogData({
    enabled: !logSuccess,
  });

  return (
    <div>
      <div className="flex items-center space-x-2 m-2">
        <RiseOutlined style={{ color: "#242424", fontSize: "20px" }} />
        <p className="font-[Roboto] text-lg text-[#242424] font-thin">
          Trending on Stream of Stories
        </p>
      </div>
      <div className="w-full xl:h-72  grid xl:grid-rows-2 xl:grid-flow-col grid-col-1 gap-4 p-2 mb-4">
        {trending?.topBlogs.map((item: any, index: any) => {
          const sequenceNumber = index + 1;
          return (
            <div key={index}>
              <TrendingCard
                sequence={sequenceNumber}
                username={item.creator.username}
                title={item.title}
                date={dayjs(item.createdAt).format("MMMM D, YYYY")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TrendingBlogsDesk;
