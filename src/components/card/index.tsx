import { CardTypes } from "./card.types";
import Thumbnile from "../../assets/img/thumbnile.gif";
import UserAvatar from "../../assets/img/userAvatar.jpeg";
import { EllipsisOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import CardDropDown from "./cardDropDown";

const BlogCard: React.FC<CardTypes> = ({
  category,
  title,
  article,
  userAvatar,
  thumbnile,
  blogId,
  userName,
  uploadDate,
  creator,
}) => {
  const { authUserInfo } = useContext(AppContext);

  return (
    <div className="flex flex-col bg-[#FFFFFF] border-b-[1px] border-[#F2F2F2] p-4 hover:bg-[#5B8BFB0D]">
      <div className="flex  justify-between space-y-2">
        <div className="space-y-3">
          <Link
            to={`/user-page/${creator}`}
            className="flex items-center space-x-4"
          >
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={UserAvatar}
              alt="User avatar"
            />
            <p className="text-[#97989F] text-xs hover:text-[gray]">
              {userName}
            </p>
          </Link>

          <Link to={`/single/${blogId}`}>
            <div className="flex flex-col justify-between overflow-hidden">
              <div className="text-[black] overflow-hidden space-y-2">
                <p className="line-clamp-1 text-lg font-bold w-64">{title}</p>
                <div className="xl:block hidden">
                  <span className="line-clamp-3 text-sm w-96">{article}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to={`/single/${blogId}`}>
          <div>
            <img
              className="rounded-sm xl:w-full w-24 h-24 xl:h-32 object-cover"
              src={Thumbnile}
              alt="User avatar"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-between xl:mt-8 mt-2 w-full">
        <div className="flex items-center space-x-4">
          <Link to={`/category/${category}`}>
            <p className="text-[#97989F] hover:text-[gray] text-xs bg-[#4B6BFB0D] px-2.5 py-1 rounded-3xl">
              {category}
            </p>
          </Link>
          <p className="text-[#97989F] text-sm">{uploadDate}</p>
        </div>
        <div>
          <CardDropDown
            triggerProps={{
              className: `${
                creator === authUserInfo?.id ? "visible" : "invisible"
              } text-3xl text-[#97989F] hover:text-[black] border-none cursor-pointer`,
            }}
            blogId={blogId}
          >
            <EllipsisOutlined />
          </CardDropDown>
          {/* <EllipsisOutlined
            className={`${
              creator === authUserInfo?.id ? "visible" : "invisible"
            } text-3xl text-[#97989F] hover:text-[black] cursor-pointer`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
