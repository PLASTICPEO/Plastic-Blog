import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="flex space-x-20">
      <Link to="/">
        <div className="text-[#707070] hover:text-[#B8B8B8] cursor-pointer">
          Home
        </div>
      </Link>

      <div className="text-[#707070] hover:text-[#B8B8B8] cursor-pointer">
        About
      </div>
      <div className="text-[#707070] hover:text-[#B8B8B8] cursor-pointer">
        Contact
      </div>
    </div>
  );
};

export default Navigator;
