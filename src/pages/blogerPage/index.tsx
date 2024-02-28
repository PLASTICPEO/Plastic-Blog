import { useParams } from "react-router-dom";
import { useBloggerInformation } from "../../api/services/blogger";
import AboutUserSection from "../../components/userPageFeatures/aboutUser";
import UserMain from "../../components/userPageFeatures/main";
import { useEffect } from "react";

const BlogerPage = () => {
  const { id } = useParams();
  const { data: blogerInfo } = useBloggerInformation(id, { enabled: !!id });

  useEffect(() => console.log(blogerInfo, id), [blogerInfo]);
  return (
    <div className="w-full h-full mt-28 flex  mx-auto container grid xl:grid-cols-8  grid-cols-1 gap-4">
      <div className="xl:col-span-5 order-2 xl:order-1">
        <UserMain bloggerInfo={blogerInfo} />
      </div>
      <div className="xl:col-span-3 order-1 xl:order-2">
        <AboutUserSection blogerInformation={blogerInfo} />
      </div>
    </div>
  );
};

export default BlogerPage;
