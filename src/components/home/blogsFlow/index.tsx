import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";

import HomeCategoryTab from "./categoryTab";
import BlogsFlowContent from "./content";

const BlogsFlow = () => {
  const { logSuccess } = useContext(AppContext);

  return (
    <div className="flex flex-col space-y-2 mx-2 ">
      {logSuccess ? (
        <div className="sticky top-0">
          <HomeCategoryTab />
        </div>
      ) : null}
      <div>
        <BlogsFlowContent />
      </div>
    </div>
  );
};

export default BlogsFlow;
