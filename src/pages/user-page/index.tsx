import AboutUserSection from "../../components/userPageFeatures/aboutUser";
import UserMain from "../../components/userPageFeatures/main";

const UserPage = () => {
  return (
    <div className="w-full h-full mt-28 flex  mx-auto container grid xl:grid-cols-8  grid-cols-1 gap-4">
      <div className="xl:col-span-5 order-2 xl:order-1">
        <UserMain />
      </div>
      <div className="xl:col-span-3 order-1 xl:order-2">
        <AboutUserSection />
      </div>
    </div>
  );
};

export default UserPage;
