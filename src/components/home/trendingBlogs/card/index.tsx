const TrendingCard = () => {
  return (
    <div className=" font-[Roboto]">
      <div className="flex">
        <div className="px-4  text-[#D0CCD0] bg-[#FFFFFF] font-[Letters] m-1 text-3xl">
          01
        </div>
        <div className="flex flex-col  h-24 justify-between mx-4 bg-[#FFFFFF]">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="bg-[gray] rounded-full w-5 h-5"></p>
              <p>username</p>
            </div>
            <div className="line-clamp-1 text-lg font-bold w-72">Title</div>
          </div>

          <div>
            <p className="text-[#97989F] text-sm">data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
