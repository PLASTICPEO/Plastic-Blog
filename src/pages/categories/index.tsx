import { Link, useParams } from "react-router-dom";
import { useBlogCategory } from "../../api/services/categories";
import { useEffect, useState } from "react";
import { useBlogSingle } from "../../api/services/blogSingle";
import { useBlogList } from "../../api/services/blogList";
import BlogCard from "../../components/card";
import dayjs from "dayjs";
import CardSkeleton from "../../components/card/cardSkeleton";

const CategoriesPage = () => {
  const { topic } = useParams();
  const { data: listData, isLoading }: any = useBlogCategory(topic, {
    enabled: !!topic,
  });

  return (
    <div className="mt-44 mx-auto container">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {!isLoading ? (
          listData?.map((item: any, index: number) => {
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
          })
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
