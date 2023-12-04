import { CardTypes } from "./card.types";
import Thumbnile from "../../assets/img/thumbnile.gif";
import UserAvatar from "../../assets/img/userAvatar.jpeg";

const BlogCard: React.FC<CardTypes> = ({
  category,
  title,
  userAvatar,
  thumbnile,
  userName,
  uploadDate,
}) => {
  return (
    <div className="flex flex-col space-y-4  bg-[#FFFFFF] border-[1px] border-[#E8E8EA] rounded-lg p-4 hover:bg-[#5B8BFB0D]">
      <div>
        <img
          className="rounded-md w-full h-60 object-cover"
          src={Thumbnile}
          alt="User avatar"
        />
      </div>
      <div>
        <p className="text-[#4B6BFB] text-center font-bold w-max  px-1 py-1.5 rounded-md text-sm bg-[#4B6BFB0D]">
          {category}
        </p>
      </div>
      <div>
        <p className="text-lg text-[black] font-bold">{title}</p>
      </div>
      <div className="flex items-center space-x-4">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={UserAvatar}
          alt="User avatar"
        />
        <p className="text-[#97989F]">{userName}</p>
        <p className="text-[#97989F]">{uploadDate}</p>
      </div>
    </div>
  );
};

export default BlogCard;
