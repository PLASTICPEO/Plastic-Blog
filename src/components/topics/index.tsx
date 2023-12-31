import { ConfigProvider, Space, Tag } from "antd";

const { CheckableTag } = Tag;

const tagsData = [
  "Food",
  "Travel",
  "Cognitive",
  "Book and writing",
  "Personal",
  "Photography",
  "Lifestyle",
  "Music",
  "Art and design",
];

const Topics: React.FC<{
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}> = ({ selectedTags, onChange }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);

    // Call the onChange function provided by the parent component
    onChange(nextSelectedTags);
  };

  return (
    <div>
      <p className="font-bold mb-3">Topics</p>
      <ConfigProvider
        theme={{
          token: {
            borderRadiusSM: 12,
            colorPrimary: "none",
            colorFillTertiary: "rgb(198, 202, 83)",
          },
          components: {
            Tag: {
              defaultColor: "#AAB3A8",
              colorTextLightSolid: "#141415",
            },
          },
        }}
      >
        <Space size={[0, 10]} wrap>
          {tagsData.map((tag) => (
            <CheckableTag
              style={{ backgroundColor: "#4B6BFB0D" }}
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default Topics;
