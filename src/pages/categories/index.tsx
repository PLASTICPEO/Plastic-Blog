import { useParams } from "react-router-dom";
import { useBlogCategory } from "../../api/services/categories";
import BlogCard from "../../components/card";
import dayjs from "dayjs";
import CardSkeleton from "../../components/card/cardSkeleton";
import CategoryHeader from "./header";
import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import { useCategoryFollowersCount } from "../../api/services/categoryFollowers";
import { AppContext } from "../../context/ContextProvider";
import { UpOutlined } from "@ant-design/icons";

const CategoriesPage = () => {
  const { topic } = useParams();
  const { scrollPositionTop } = useContext(AppContext);
  const {
    data: listData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }: any = useBlogCategory(topic, {
    enabled: !!topic,
  });
  const { data: followersCount }: any = useCategoryFollowersCount(topic, {
    enabled: !!topic,
  });

  const handleScroll = () => {
    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="mt-24 mx-auto container">
      <CategoryHeader
        categoryList={listData?.info.pagesInfo[0].data.pagination.total_records}
        category={topic}
        followers={followersCount}
      />

      <InfiniteScroll
        dataLength={listData ? listData?.pages.length : 0}
        next={handleScroll}
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
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {listData?.pages.map((item: any, index: number) => {
            return (
              <div key={index}>
                <BlogCard
                  title={item.title}
                  article={item.article}
                  userName={item.creator.username}
                  category={item.category}
                  uploadDate={dayjs(item.createdAt).format("MMMM D, YYYY")}
                  blogId={item._id}
                  creator={item.creator.id}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CategoriesPage;
