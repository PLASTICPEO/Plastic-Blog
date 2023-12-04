import { Children, ReactNode } from "react";
import { Link } from "react-router-dom";

// display: inline-block;
// outline: 0;
// cursor: pointer;
// border-radius: 8px;
// box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
// background: #FFD814;
// border: 1px solid #FCD200;
// font-size: 13px;
// height: 31px;
// padding: 0 11px;
// text-align: center;
// width: 100%;
// min-width: 200px;
// font-weight: 500;
// color: #0F1111;
// :hover{
//     background: #F7CA00;
//     border-color: #F2C200;
//     box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
// }

const CustomButton: React.FC<{
  title: string;
  path: string;
  children?: ReactNode;
}> = ({ children, title, path }) => {
  return (
    <>
      <Link to={`/${path}`}>
        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#F7CA00] rounded-md hover:hover:bg-[#f7d22d] ">
          <span className="flex items-center">{children}</span>
          <span>{title}</span>
        </button>
      </Link>
    </>
  );
};

export default CustomButton;
