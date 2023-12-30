import { Link } from "react-router-dom";
import { useBlogList } from "../../../api/services/blogList";

import BlogCard from "../../card";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/ContextProvider";
import CardSkeleton from "../../card/cardSkeleton";

const Content = () => {
  const { data: listData, isLoading }: any = useBlogList();
  const { authUserInfo } = useContext(AppContext);
  const [userInterestsBlogs, setUserInterestsBlogs] = useState([]);

  useEffect(() => {
    customSort();
  }, [authUserInfo, listData]);

  const customSort = () => {
    if (authUserInfo) {
      const filteredData = listData?.data?.filter((item: any) => {
        return authUserInfo?.interests.includes(item.category);
      });
      setUserInterestsBlogs(filteredData);
    } else {
      setUserInterestsBlogs(listData?.data);
    }
  };

  return (
    <div className="mx-auto container">
      {!isLoading
        ? userInterestsBlogs?.map((item: any, index: number) => {
            const formattedDate = dayjs(item.createdAt).format("MMM D, YYYY");
            return (
              <div key={index}>
                <BlogCard
                  title={item.title}
                  article={item.article}
                  userName={item.creator.username}
                  category={item.category}
                  uploadDate={formattedDate}
                  blogId={item._id}
                  creator={item.creator._id}
                />
              </div>
            );
          })
        : listData?.data.map((item: any, index: number) => {
            return (
              <div key={index}>
                <CardSkeleton />
              </div>
            );
          })}
    </div>
  );
};
export default Content;
