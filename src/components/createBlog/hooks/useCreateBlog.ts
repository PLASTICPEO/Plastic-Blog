import { useEffect } from "react";
import { Form, SelectProps } from "antd";
import { useBlogSave } from "../../../api/services/blogSave";
import { useNavigate } from "react-router-dom";

export const useCreateBlog = () => {
  //   const queryClient = useQueryClient();
  const { mutate: blogSave, data: sentBlogRes } = useBlogSave();
  const [form] = Form.useForm();

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
      label: "Cognitive",
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

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleChange = (selectedValues: any) => {
    const selectedCategories = options.filter((item: any) =>
      selectedValues.includes(item.value)
    );
    const selectedCategoriesString = selectedCategories
      .map((category) => category.label)
      .join(", ");

    // Set the selected categories in the form values
    form.setFieldsValue({
      category: selectedCategoriesString,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    const newBlogObject = {
      category: values.category,
      title: values.title,
      article: values.article,
    };
    blogSave(newBlogObject);
  };

  useEffect(() => {
    if (sentBlogRes) {
      form.resetFields();
    }
  }, [sentBlogRes, form]);

  return {
    handleChange,
    onFinishFailed,
    onFinish,
    normFile,
    form,
    options,
  };
};
