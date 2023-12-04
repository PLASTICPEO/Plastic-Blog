import TextArea from "antd/es/input/TextArea";

const Article = () => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };
  return (
    <div className="flex items-center">
      <p className="w-20">Article:</p>
      <TextArea
        bordered={false}
        placeholder="Share the article with us"
        allowClear
        onChange={onChange}
      />
    </div>
  );
};
export default Article;
