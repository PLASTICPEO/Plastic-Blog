import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 p-2 bg-[#D6D6D6] rounded-full">
      <Link to={"/"}>
        <span className="text-3xl text-[#11151C] material-symbols-outlined cursor-pointer">
          raven
        </span>
      </Link>
    </div>
  );
};

export default Logo;
