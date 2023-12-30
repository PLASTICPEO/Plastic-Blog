import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/ContextProvider";
import { useBlogList } from "../../../../api/services/blogList";

import BlogCard from "../../../card";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import CardSkeleton from "../../../card/cardSkeleton";

const UserBlogs = () => {
  const { authUserInfo } = useContext(AppContext);
  const { data: list }: any = useBlogList();
  const [personalBlogList, setPersonalBlogList]: any = useState(null);

  return (
    <div>
      <div className="p-2">
        {authUserInfo
          ? list?.data.map((item: any, index: number) => {
              if (authUserInfo?.blogs.includes(item._id)) {
                const formattedDate = dayjs(item.createdAt).format(
                  "MMM D, YYYY"
                );
                return (
                  <div key={index}>
                    <BlogCard
                      category={item.category}
                      title={item.title}
                      userName={item.creator.username}
                      article={item.article}
                      uploadDate={formattedDate}
                      blogId={item._id}
                      creator={item.creator._id}
                    />
                  </div>
                );
              }
            })
          : list?.data.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <CardSkeleton />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default UserBlogs;
