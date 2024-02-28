import TrendingCard from "./card";
import { RiseOutlined } from "@ant-design/icons";

const TrendingBlogsDesk = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 m-2">
        <RiseOutlined style={{ color: "#242424", fontSize: "20px" }} />
        <p className="font-[Roboto] text-lg text-[#242424] font-thin">
          Trending on Stream of Stories
        </p>
      </div>
      <div className="w-full xl:h-72  grid xl:grid-rows-2 xl:grid-flow-col grid-col-1 gap-4 p-2 mb-4">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </div>
  );
};
export default TrendingBlogsDesk;
