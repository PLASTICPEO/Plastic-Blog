import { useState, useRef, useEffect, useContext } from "react";
import { LeftOutlined, RightOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../context/ContextProvider";

const tagsData = [
  { key: "1", label: "Food", path: "/Food" },
  { key: "2", label: "Travel", path: "/Travel" },
  { key: "3", label: "Cognitive", path: "/Cognitive" },
  { key: "4", label: "Book and writing", path: "/Book and writing" },
  { key: "5", label: "Personal", path: "/Personal" },
  { key: "6", label: "Photography", path: "/Photography" },
  { key: "7", label: "Lifestyle", path: "/Lifestyle" },
  { key: "8", label: "Music", path: "/Music" },
  { key: "9", label: "Art and design", path: "/Art and design" },
  { key: "10", label: "Cinema", path: "/Cinema" },
];

const HomeCategoryTab = () => {
  const { setChangeCategory, scrollPositionTop, setForYou } =
    useContext(AppContext);

  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);

  const onChange = (category: string) => {
    scrollPositionTop();
    setForYou(false);
    setChangeCategory(category);
  };

  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -100 : 100;
      scrollContainer.scrollLeft += scrollAmount;
      setScrollLeft(scrollContainer.scrollLeft);
    }
  };

  const handleContainerScroll = () => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      setScrollLeft(scrollContainer.scrollLeft);
    }
  };

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleContainerScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleContainerScroll);
      }
    };
  }, []);

  const handleForYou = () => {
    scrollPositionTop();
    setForYou(true);
  };

  return (
    <div className="flex items-center h-12 border-b-[1px] px-2  bg-[#FFFFFF]">
      <div className="tabShadowLeft  mb-1 font-thin">
        {scrollLeft === 0 ? (
          <div className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-[#F5F5F5] text-[#97989F] hover:text-[#424242] cursor-pointer">
            <PlusOutlined onClick={() => console.log("ოფენ")} />
          </div>
        ) : (
          <LeftOutlined
            className="text-[#97989F] hover:text-[#424242]"
            onClick={() => handleScroll("left")}
          />
        )}
      </div>

      <div
        className="flex items-center space-x-8 overflow-x-scroll no-scrollbar  px-4 mx-2 scroll-smooth"
        ref={scrollContainerRef}
      >
        <Link to={"/"}>
          <button
            onClick={() => handleForYou()}
            className="text-[#97989F] border-b-[1px]  hover:text-[black] focus:text-[black] focus:border-b-[1px]  pb-2  h-12 focus:border-black"
          >
            <p className="w-max text-sm cursor-pointer font-thin font-Roboto">
              For you
            </p>
          </button>
        </Link>

        {tagsData.map((item: any, index: number) => {
          return (
            <Link key={index} to={`${item.path}`}>
              <button
                onClick={() => onChange(item.label)}
                className="w-max text-sm cursor-pointer font-thin font-Roboto text-[#97989F] hover:text-[black] border-b-[1px]  focus:text-[black] focus:border-b-[1px] pb-2 h-12 focus:border-black"
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="tabShadowRight text-sm mb-1">
        <RightOutlined
          className="text-[#97989F] hover:text-[#424242]"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default HomeCategoryTab;
