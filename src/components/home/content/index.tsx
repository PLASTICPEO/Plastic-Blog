import { useBlogList } from "../../../api/services/blogList";

import BlogCard from "../../card";
import dayjs from "dayjs";
import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";
import CardSkeleton from "../../card/cardSkeleton";
import { useInterestedBlogs } from "../../../api/services/InterestedBlogs";

const Content = () => {
  const { logSuccess } = useContext(AppContext);
  const {
    data: allBlogsList,
    isLoading: allblogsLoading,
    error: allBlogsError,
  }: any = useBlogList();
  const {
    data: interestedBlogsList,
    isLoading: interestedBlogsLoading,
    error: interestedBlogsError,
  }: any = useInterestedBlogs({ enabled: logSuccess });

  if (allBlogsError || interestedBlogsError) {
    return <p>Error: {allBlogsError || interestedBlogsError}</p>;
  }

  return (
    <div className="mx-auto container">
      {logSuccess ? (
        interestedBlogsLoading ? (
          <CardSkeleton />
        ) : (
          interestedBlogsList?.map((item: any, index: number) => (
            <div key={index}>
              <BlogCard
                title={item.title}
                article={item.article}
                userName={item.creator.username}
                category={item.category}
                uploadDate={dayjs(item.createdAt).format("MMM D, YYYY")}
                blogId={item._id}
                creator={item.creator.id}
              />
            </div>
          ))
        )
      ) : allblogsLoading ? (
        <CardSkeleton />
      ) : (
        allBlogsList?.map((item: any, index: number) => (
          <div key={index}>
            <BlogCard
              title={item.title}
              article={item.article}
              userName={item.creator.username}
              category={item.category}
              uploadDate={dayjs(item.createdAt).format("MMM D, YYYY")}
              blogId={item._id}
              creator={item.creator.id}
            />
          </div>
        ))
      )}
    </div>
  );
};
export default Content;
