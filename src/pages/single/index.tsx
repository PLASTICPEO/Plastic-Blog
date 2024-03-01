import { useContext, useEffect, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import { AppContext } from "../../context/ContextProvider";
import userAvatar from "../../assets/img/userAvatar.jpeg";
import { useBlogLike } from "../../api/services/like";
import { useBlogUnLike } from "../../api/services/unlike";
import { Link, useParams } from "react-router-dom";
import { useBlogSingle } from "../../api/services/blogSingle";
import LoadingAnimationComponent from "../../components/loading";
import dayjs from "dayjs";
import { useIsLiked } from "../../api/services/isLiked";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: Isliked }: any = useIsLiked(id, { enabled: !!id });
  const { logSuccess } = useContext(AppContext);
  const { mutate: blogLike } = useBlogLike();
  const { mutate: blogUnLike } = useBlogUnLike();
  const { data: blog, isLoading }: any = useBlogSingle(id, { enabled: !!id });
  const [hitRecommend, setHitRecommend] = useState(false);

  useEffect(() => {
    console.log(Isliked);
    if (Isliked) {
      setHitRecommend(true);
    }
  }, [Isliked]);

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
        <div className="pt-24 flex items-center justify-center  container mx-auto">
          <div className="flex flex-col space-y-4 w-8/12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-Letters font-bold">{blog.title}</p>
              </div>
              <div>
                {logSuccess ? (
                  <div onClick={() => recommend()}>
                    {hitRecommend ? (
                      <LikeOutlined
                        style={{
                          fontSize: "26px",
                          color: "#3ACF3F",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <LikeOutlined
                        style={{
                          fontSize: "26px",
                          color: "#C3F3C0",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={userAvatar}
                alt="User avatar"
              />
              <p className="text-[#97989F]">{blog?.creator.username}</p>
              <p className="text-[#97989F] text-xs">
                {dayjs(blog?.createdAt).format("MMM D, YYYY")}
              </p>
              <Link to={`/category/${blog.category}`}>
                <p className="text-[#97989F] hover:text-[#BFB8AD] text-center font-Roboto text-xs bg-[#4B6BFB0D] px-2.5 py-1 rounded-3xl">
                  {blog.category}
                </p>
              </Link>
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
