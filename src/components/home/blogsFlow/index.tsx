import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/ContextProvider";

import HomeCategoryTab from "./categoryTab";
import BlogsFlowContent from "./content";
import { useParams } from "react-router-dom";

const BlogsFlow = () => {
  const { changeCategory, logSuccess } = useContext(AppContext);

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
