import { TrendingCardTypes } from "./index.types";

const TrendingCard: React.FC<TrendingCardTypes> = ({
  sequence,
  username,
  title,
  date,
}) => {
  return (
    <div className=" font-[Roboto]">
      <div className="flex">
        <div className="px-4  text-[#F4F5F6] bg-[#FFFFFF] font-[Letters] m-1 text-3xl">
          0{sequence}
        </div>
        <div className="flex flex-col mb-2 justify-between mx-4 bg-[#FFFFFF]">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="bg-gradient-to-r from-[#053B06] to-[#60495A] rounded-full w-7 h-7 text-xs flex items-center justify-center text-wrap animate-pulse"></p>

              <p>{username}</p>
            </div>
            <div className="line-clamp-1 text-lg font-bold w-72">{title}</div>
          </div>

          <div>
            <p className="text-[#97989F] text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
