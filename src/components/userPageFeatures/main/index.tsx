import UserPageTabs from "../tabs";

const UserMain: React.FC<{ bloggerInfo: any }> = ({ bloggerInfo }) => {
  return (
    <div className="border-r-[1px] xl:col-span-5 xl:px-0 px-4">
      <p className="text-4xl xl:py-4 py-0 xl:visible invisible">
        {bloggerInfo?.username}
      </p>
      <UserPageTabs />
    </div>
  );
};

export default UserMain;
