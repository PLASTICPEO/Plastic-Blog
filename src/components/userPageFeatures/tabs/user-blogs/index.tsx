import BlogCard from "../../../card";
import dayjs from "dayjs";
import CardSkeleton from "../../../card/cardSkeleton";
import { useUserBlogsList } from "../../../../api/services/userBlogs";

const UserBlogs = () => {
  const { data: userBlogs, isLoading }: any = useUserBlogsList();

  return (
    <div>
      <div className="p-2">
        {!isLoading ? (
          userBlogs?.map((item: any, index: number) => {
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
          })
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
