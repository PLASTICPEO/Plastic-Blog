import { CategoryTypes } from "./index.types";

const CategoryHeader: React.FC<CategoryTypes> = ({
  categoryList,
  category,
  followers,
}) => {
  return (
    <div className="w-full h-40 flex flex-col items-center space-y-4 ">
      <div className="mt-10">
        <p className="text-3xl font-[Roboto] font-bold">{category}</p>
      </div>

      <div className="flex space-x-1 text-[#6B6B6B] font-thin font-[Roboto]">
        <span>Topic</span>
        <span className="h-2 w-2 mt-1 text-center flex items-center justify-center">
          .
        </span>
        <span>{followers?.followersCount}</span>
        <span>Followers</span>
        <span className="h-2 w-2 mt-1 text-center flex items-center justify-center">
          .
        </span>
        <span>{categoryList}</span>
        <span>Stories</span>
      </div>
    </div>
  );
};

export default CategoryHeader;
