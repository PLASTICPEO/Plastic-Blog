import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [
  {
    value: "1",
    label: "Food",
  },
  {
    value: "2",
    label: "Travel",
  },
  {
    value: "3",
    label: "Lifestyle",
  },
  {
    value: "4",
    label: "Book and writing",
  },
  {
    value: "5",
    label: "Personal",
  },
  {
    value: "6",
    label: "Photography",
  },
  {
    value: "7",
    label: "Lifestyle",
  },
  {
    value: "8",
    label: "Music",
  },
  {
    value: "9",
    label: "Art and design",
  },
];

// for (let i = 10; i < options.length; i++) {
//   options.push({
//     value: i.toString(36) + i,
//     label: i.toString(36) + i,
//   });
// }

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const CategoriesSelect: React.FC = () => (
  <div className="flex items-center space-x-2">
    <p>Categories:</p>
    <Select
      mode="tags"
      style={{ width: "100%" }}
      onChange={handleChange}
      tokenSeparators={[","]}
      options={options}
    />
  </div>
);

export default CategoriesSelect;
