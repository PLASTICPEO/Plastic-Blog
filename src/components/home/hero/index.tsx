import HeroCover from "../../../assets/img/HeroCover.jpg";
const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-72 mt-4 rounded-md">
      <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-[#053B06] to-[#60495A] rounded-xl">
        <p className="text-[#FFFFFF] font-[Letters] text-5xl animate-pulse">
          Stream Of Stories
        </p>
      </div>
    </div>
  );
};

export default Hero;
