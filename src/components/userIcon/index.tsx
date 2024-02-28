import LoadingAnimationComponent from "../loading";
import { UserIconSize } from "./index.enum";

const UserIcon: React.FC<{ size?: UserIconSize; blogerInfo: any }> = ({
  size,
  blogerInfo,
}) => {
  return (
    <div className="cursor-pointer">
      {blogerInfo ? (
        <div
          className={`flex items-center justify-center ${size} rounded-full bg-[#DEC1FF]`}
        >
          <p className="text-[#797E77]">{blogerInfo?.username[0]}</p>
          <p className="text-[#797E77]">
            {blogerInfo?.username[blogerInfo?.username.length - 1]}
          </p>
        </div>
      ) : (
        <div
          className={`flex items-center justify-center ${size} rounded-full bg-[#E2E2DF]  animate-pulse`}
        >
          <LoadingAnimationComponent />
        </div>
      )}
    </div>
  );
};

export default UserIcon;
