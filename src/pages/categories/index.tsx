import { Link, useParams } from "react-router-dom";
import { useBlogCategory } from "../../api/services/categories";
import { useEffect, useState } from "react";
import { useBlogSingle } from "../../api/services/blogSingle";
import { useBlogList } from "../../api/services/blogList";
import BlogCard from "../../components/card";
import dayjs from "dayjs";

const CategoriesPage = () => {
  const { topic } = useParams();
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { data: listData }: any = useBlogList();

  useEffect(() => {
    // Filter the list based on the selected category
    const filteredCategories = listData?.data.filter(
      (blog: any) => blog.category === topic
    );

    // Update the state with the filtered categories
    setFilteredCategories(filteredCategories);
  }, [listData, topic]);

  return (
    <div className="mt-44 mx-auto container">
      <div className="grid xl:grid-cols-2 grid-cols-2 gap-5 mt-10">
        {filteredCategories?.map((item: any, index: number) => {
          console.log(item);
          const formattedDate = dayjs(item.createdAt).format("MMMM D, YYYY");
          return (
            <div key={index}>
              <BlogCard
                title={item.title}
                article={item.article}
                userName={item.creator.username}
                category={item.category}
                uploadDate={formattedDate}
                blogId={item._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
