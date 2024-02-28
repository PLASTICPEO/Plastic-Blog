import { useContext, useState } from "react";
import { ConfigProvider, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { SearchProps } from "antd/es/input";
import { useBlogList } from "../../../api/services/blogList";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/ContextProvider";
import InfiniteScroll from "react-infinite-scroll-component";

const CustomSearch: React.FC = () => {
  const [result, setResult] = useState<any>();
  const {
    data: list,
    error,
    status,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }: any = useBlogList();
  const { scrollY } = useContext(AppContext);

  const onSearch: SearchProps["onSearch"] = (value: any) => {
    const trimmedValue = value.trim();
    const searchResult = list?.filter((item: any) =>
      item.title.toLowerCase().includes(trimmedValue.toLowerCase())
    );

    if (trimmedValue.length > 0) {
      setResult(searchResult);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: "none",
                activeShadow: "none",
                hoverBorderColor: "none",
                paddingBlock: 6,
              },
            },
            token: {
              colorBorder: "none",
              borderRadius: 20,
            },
          }}
        >
          <Input
            className="caret-[#97989F]"
            placeholder="Search"
            onChange={(e: any) => onSearch(e.target.value)}
            prefix={
              <SearchOutlined style={{ fontSize: "20px", color: "#97989F" }} />
            }
          />
        </ConfigProvider>
      </Space>

      {result ? (
        <div
          className={`${
            scrollY > 100 ? "invisible" : "visible"
          } absolute left-0 bg-[#FFFFFF]  w-full py-2 px-20 mt-2 `}
        >
          <div className="text-[#343633] p-2">Blogs:</div>
          <div className="flex flex-col space-y-2 h-60 mt-2 overflow-y-auto">
            {result.map((item: any, index: number) => {
              return (
                <div
                  className=" bg-[#e0e1dd] opacity-90 hover:bg-opacity-40 py-4 px-6 mt-2 rounded-md"
                  key={index}
                  onClick={() => setResult(null)}
                >
                  <Link to={`/single/${item._id}`}>
                    <p className="text-[#343633]">{item.title}</p>
                    <p className="text-[#97989F]">
                      {dayjs(item.createdAt).format("MMM D, YYYY")}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomSearch;
