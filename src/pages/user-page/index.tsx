import { useParams } from "react-router-dom";
import AboutUserSection from "../../components/userPageFeatures/aboutUser";
import UserMain from "../../components/userPageFeatures/main";
import { useBloggerInformation } from "../../api/services/blogger";

const UserPage = () => {
  const { id } = useParams();
  const { data: blogerInformation } = useBloggerInformation(id, {
    enabled: !!id,
  });
  return (
    <div className="w-full h-full mt-28 flex  mx-auto container grid xl:grid-cols-8  grid-cols-1 gap-4">
      <div className="xl:col-span-5 order-2 xl:order-1">
        <UserMain bloggerInfo={blogerInformation} />
      </div>
      <div className="xl:col-span-3 order-1 xl:order-2">
        <AboutUserSection blogerInformation={blogerInformation} />
      </div>
    </div>
  );
};

export default UserPage;
