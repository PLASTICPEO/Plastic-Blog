import { useContext } from "react";
import { useBlogCategory } from "../../../../api/services/categories";
import { AppContext } from "../../../../context/ContextProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import BlogCard from "../../../card";

import dayjs from "dayjs";
import { useBlogList } from "../../../../api/services/blogList";
import { useParams } from "react-router-dom";
import { useInterestedBlogs } from "../../../../api/services/InterestedBlogs";
import CardSkeleton from "../../../card/cardSkeleton";
import { UpOutlined } from "@ant-design/icons";

const BlogsFlowContent = () => {
  const { category } = useParams();

  const { logSuccess, scrollPositionTop, forYou } = useContext(AppContext);

  const {
    data: allBlogsList,
    fetchNextPage: fetchAllBlogList,
    hasNextPage: hasNextAllBlogPage,
    isFetching: isFetchingAllBlog,
    isFetchingNextPage: isFetchingNextAllBlogPage,
  }: any = useBlogList({ enabled: !logSuccess });

  const {
    data: interestedBlogsList,
    fetchNextPage: fetchInterestedBlogsList,
    hasNextPage: hasNextInterestedPage,
    isFetching: isInterestedFetching,
    isFetchingNextPage: isFetchingInterestedNextPage,
  }: any = useInterestedBlogs({ enabled: !!forYou && logSuccess });
  const {
    data: categoryBlogList,
    fetchNextPage: fetchCategoryBlogsList,
    hasNextPage: hasNextCategoryBlogsPage,
    isFetching: isCategoryBlogsFetching,
    isFetchingNextPage: isFetchingCategoryBlogsNextPage,
  }: any = useBlogCategory(category ? category : "Travel", {
    enabled: !!category,
  });

  const handleAllBlogsScroll = () => {
    if (
      hasNextAllBlogPage &&
      !isFetchingAllBlog &&
      !isFetchingNextAllBlogPage
    ) {
      fetchAllBlogList();
    }
  };

  const handleInterestedBlogsScroll = () => {
    if (
      hasNextInterestedPage &&
      !isInterestedFetching &&
      !isFetchingInterestedNextPage
    ) {
      fetchInterestedBlogsList();
    }
  };

  const handleCategoryBlogsScroll = () => {
    if (
      hasNextCategoryBlogsPage &&
      !isCategoryBlogsFetching &&
      !isFetchingCategoryBlogsNextPage
    ) {
      fetchCategoryBlogsList();
    }
  };

  return (
    <div className="mx-auto container mt-2 pt-5 overflow-y">
      {/* Render actual blog cards when data is loaded */}

      {!logSuccess ? (
        <InfiniteScroll
          dataLength={allBlogsList ? allBlogsList.length : 0}
          next={handleAllBlogsScroll}
          hasMore={!!hasNextAllBlogPage}
          loader={<CardSkeleton />}
          endMessage={
            <div style={{ textAlign: "center" }}>
              {hasNextAllBlogPage ? (
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
          {allBlogsList?.map((item: any, pageIndex: number) => {
            return (
              <div key={pageIndex}>
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
      ) : null}

      {category === "For you" || (category === undefined && logSuccess) ? (
        <InfiniteScroll
          dataLength={interestedBlogsList ? interestedBlogsList?.length : 0}
          next={handleInterestedBlogsScroll}
          hasMore={!!hasNextInterestedPage}
          loader={<CardSkeleton />}
          endMessage={
            <div style={{ textAlign: "center" }}>
              {hasNextInterestedPage ? (
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
          {interestedBlogsList?.map((item: any) => {
            return (
              <div key={item._id}>
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
      ) : (
        category &&
        logSuccess && (
          <InfiniteScroll
            dataLength={categoryBlogList ? categoryBlogList.length : 0}
            next={handleCategoryBlogsScroll}
            hasMore={!!hasNextCategoryBlogsPage}
            loader={<CardSkeleton />}
            endMessage={
              <div style={{ textAlign: "center" }}>
                {hasNextCategoryBlogsPage ? (
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
            {categoryBlogList?.pages.map((item: any, index: number) => {
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
        )
      )}
    </div>
  );
};
export default BlogsFlowContent;
