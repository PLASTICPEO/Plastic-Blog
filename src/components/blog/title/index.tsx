import { Input } from "antd";

const BlogTitle = () => {
  return (
    <div className="flex items-center spaxe-x-2">
      <p className="w-20">Title:</p>
      <Input
        placeholder="Blog title"
        bordered={false}
        count={{
          show: true,
          max: 100,
        }}
      />
    </div>
  );
};

export default BlogTitle;
