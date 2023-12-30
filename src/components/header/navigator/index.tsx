import { Link } from "react-router-dom";
import CustomSearch from "../search";

const Navigator = () => {
  return (
    <div className="flex xl:space-x-20  space-x-4">
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
      <div>
        <CustomSearch />
      </div>
    </div>
  );
};

export default Navigator;
