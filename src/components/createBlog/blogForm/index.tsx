import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Select, Upload } from "antd";
import CustomButton, { ButtonSize } from "../../button";

import { useCreateBlog } from "../hooks/useCreateBlog";

const { TextArea } = Input;

const BlogForm: React.FC = () => {
  const { form, onFinish, onFinishFailed, handleChange, normFile, options } =
    useCreateBlog();

  return (
    <div>
      <Form
        form={form}
        layout="horizontal"
        style={{ width: "100%", height: "100%" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          rules={[{ required: true, message: "Please select category!" }]}
          name="category"
        >
          <Select
            bordered={false}
            placeholder="Choose category"
            style={{ width: "100%" }}
            onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please create title!" }]}
        >
          <Input
            style={{ height: "50px" }}
            placeholder="Create title"
            bordered={false}
            count={{
              show: true,
              max: 100,
            }}
          />
        </Form.Item>

        <Form.Item
          name="article"
          rules={[
            { required: true, message: "You have not written an article!" },
          ]}
        >
          <TextArea
            bordered={false}
            placeholder="Share the article with us"
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="thumbnail"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <div className="flex items-center justify-center my-20 ">
          <button className="bg-[#5EA23F] py-1 px-2 rounded-2xl text-[#FFFFFF] hover:bg-[#71BA4F]">
            Publish
          </button>
        </div>
      </Form>
    </div>
  );
};

export default BlogForm;
