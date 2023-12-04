import { Link } from "react-router-dom";
import BlogCard from "../../card";

const items = [
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Personal",
    uploadDate: "December 4, 2023",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Photography",
    uploadDate: "December 4, 2023",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Photography",
    uploadDate: "December 4, 2023",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Music",
    uploadDate: "December 4, 2023",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Food",
    uploadDate: "December 4, 2023",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    userName: "Gio Davlasheridze",
    category: "Travel",
    uploadDate: "December 4, 2023",
  },
];

const Content = () => {
  const handleCardClick = (cardObj: any) => {
    console.log(cardObj);
  };
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 mt-10">
      {items.map((item: any, index: number) => {
        return (
          <Link key={index} to="/single" onClick={() => handleCardClick(item)}>
            <BlogCard
              title={item.title}
              userName={item.userName}
              category={item.category}
              uploadDate={item.uploadDate}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default Content;
