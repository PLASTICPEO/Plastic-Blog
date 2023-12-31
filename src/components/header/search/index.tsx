import React, { useEffect, useState } from "react";
import { ConfigProvider, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { SearchProps } from "antd/es/input";
import { useBlogList } from "../../../api/services/blogList";
import BlogCard from "../../card";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const CustomSearch: React.FC = () => {
  const [result, setResult] = useState<any>();
  const { data: list } = useBlogList();

  const onSearch: SearchProps["onSearch"] = (value: any) => {
    const trimmedValue = value.trim();
    const searchResult = list.filter((item: any) =>
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
            placeholder="Search"
            onChange={(e: any) => onSearch(e.target.value)}
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>
      </Space>
      {result ? (
        <div className="absolute left-0 bg-[#FFFFFF]  w-full py-2 px-20 mt-2 w-full">
          <div className="text-[#343633] p-2">Blogs:</div>
          <div className="flex flex-col space-y-2 min-h-44 max-h-96 mt-2 overflow-y-auto">
            {result.map((item: any, index: number) => {
              return (
                <div
                  className=" bg-[#e0e1dd] opacity-90 hover:bg-opacity-40 py-4 px-6 rounded-md"
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
