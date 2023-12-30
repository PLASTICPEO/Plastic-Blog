const CardSkeleton = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] border-b-[1px] border-[#F2F2F2] p-4 hover:bg-[#5B8BFB0D]">
      <div className="flex  justify-between space-y-2">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="xl:w-10 xl:h-10 rounded-full  bg-gradient-to-l from-[#B8B8B8] animate-pulse"></div>
            <p className="bg-gradient-to-l from-[#B8B8B8] animate-pulse w-20 h-2 rounded-lg "></p>
          </div>
          <div className="flex flex-col justify-between space-y-3 ">
            <div className="xl:w-64 xl:h-8 bg-gradient-to-l from-[#B8B8B8] rounded-full animate-pulse"></div>
            <div className="space-y-2">
              <p className="w-40 h-2 bg-gradient-to-l from-[#B8B8B8] rounded-full animate-pulse"></p>
              <p className="w-64 h-2 bg-gradient-to-l from-[#B8B8B8] rounded-full animate-pulse"></p>
              <p className="w-38 h-2 bg-gradient-to-l from-[#B8B8B8] rounded-full animate-pulse"></p>
              <p className="w-64 h-2 bg-gradient-to-l from-[#B8B8B8] rounded-full animate-pulse"></p>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-sm xl:w-32 w-20 h-20 xl:h-32 bg-gradient-to-l from-[#B8B8B8] animate-pulse"></div>
        </div>
      </div>
      <div className="flex justify-between mt-8 w-full">
        <div className="flex items-center space-x-4">
          <p className="w-8 h-3 bg-gradient-to-l from-[#B8B8B8] animate-pulse rounded-full"></p>

          <p className="w-6 h-2 bg-gradient-to-l from-[#B8B8B8] animate-pulse rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
