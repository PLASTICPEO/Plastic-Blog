import BlogCard from "../../../card";
import { UpOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import CardSkeleton from "../../../card/cardSkeleton";
import { useUserBlogsList } from "../../../../api/services/userBlogs";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../../../../context/ContextProvider";

const UserBlogs = () => {
  const { id } = useParams();
  const {
    data: userBlogs,
    error,
    status,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }: any = useUserBlogsList(id, {
    enabled: !!id,
  });
  const { scrollPositionTop } = useContext(AppContext);

  const handleAllBlogsScroll = () => {
    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div>
      <div className="p-2">
        <InfiniteScroll
          dataLength={userBlogs ? userBlogs?.length : 0}
          next={handleAllBlogsScroll}
          hasMore={!!hasNextPage}
          loader={<CardSkeleton />}
          endMessage={
            <div style={{ textAlign: "center" }}>
              {hasNextPage ? (
                "Loading..."
              ) : (
                <div
                  onClick={() => scrollPositionTop()}
                  className="font-[Roboto] font-thin text-sm text-[#424242] p-4 animate-pulse cursor-pointer"
                >
                  <UpOutlined />
                  <p>Nothing more to load, Up to top</p>
                </div>
              )}
            </div>
          }
        >
          {userBlogs?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <BlogCard
                  category={item.category}
                  title={item.title}
                  userName={item.creator.username}
                  article={item.article}
                  uploadDate={dayjs(item.createdAt).format("MMM D, YYYY")}
                  blogId={item._id}
                  creator={item.creator.id}
                />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default UserBlogs;
