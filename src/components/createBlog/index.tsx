import { useContext, useEffect } from "react";
import { AppContext } from "../../context/ContextProvider";
import BlogForm from "./blogForm";

const CreateBlog = () => {
  const { handleSentNewBlog } = useContext(AppContext);

  return (
    <div>
      <BlogForm />
    </div>
  );
};
export default CreateBlog;
