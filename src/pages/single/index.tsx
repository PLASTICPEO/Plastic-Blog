import { useContext, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import userAvatar from "../../assets/img/userAvatar.jpeg";
import { useBlogLike } from "../../api/services/like";
import { useBlogUnLike } from "../../api/services/unlike";
import { Link, useParams } from "react-router-dom";
import { useBlogSingle } from "../../api/services/blogSingle";
import LoadingAnimationComponent from "../../components/loading";

const SingleBlog = () => {
  const { id } = useParams();
  const { selectedCard, logSuccess } = useContext(AppContext);
  const { mutate: blogLike } = useBlogLike();
  const { mutate: blogUnLike } = useBlogUnLike();
  const { data: blog, isLoading }: any = useBlogSingle(id, { enabled: !!id });

  const [hitRecommend, setHitRecommend] = useState(false);

  const recommend = () => {
    if (!hitRecommend) {
      blogLike(id);
      setHitRecommend(!hitRecommend);
    } else {
      blogUnLike(id);
      setHitRecommend(!hitRecommend);
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingAnimationComponent />
      ) : (
        <div className="pt-24 flex items-center justify-center font-Letters container mx-auto">
          <div className="flex flex-col space-y-4 w-8/12">
            <div className="flex items-center justify-between">
              <Link to={`/category/${blog.category}`}>
                {/* <p
                  className={`text-[#FFFFFF] text-center w-max  px-2 py-1.5 rounded-md text-sm bg-[#5EA0FD] ${
                    isLoading ? "animate-pulse" : ""
                  }`}
                >
                  {blog.category}
                </p> */}
                <p className="text-[#97989F] hover:text-[#BFB8AD] text-center font-bold text-sm bg-[#4B6BFB0D] px-3.5 py-1 rounded-3xl">
                  {blog.category}
                </p>
              </Link>
              {logSuccess ? (
                <div onClick={() => recommend()}>
                  <span
                    className={`material-symbols-outlined cursor-pointer text-5xl ${
                      hitRecommend
                        ? "text-[#3ACF3F]"
                        : "text-[#C3F3C0] hover:text-[#3ACF3F]"
                    }`}
                  >
                    recommend
                  </span>
                </div>
              ) : (
                <div className="">
                  <span
                    className={`material-symbols-outlined cursor-pointer text-5xl text-[yellowgreen]`}
                  >
                    recommend
                  </span>
                </div>
              )}
            </div>
            <div>
              <p className="text-lg font-Letters font-bold">{blog.title}</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={userAvatar}
                alt="User avatar"
              />
              <p className="text-[#97989F]">{blog?.creator.username}</p>
              <p className="text-[#97989F]">{selectedCard?.uploadDate}</p>
            </div>
            <div>
              <p>{blog.article}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleBlog;
