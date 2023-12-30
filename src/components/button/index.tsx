import { Children, ReactNode } from "react";
import { Link } from "react-router-dom";

export enum ButtonSize {
  FULL = "w-full px-4 py-2",
  DEFAULT = "px-8 py-2",
  MEDIUM = "w-64 px-6 py-4",
}

const CustomButton: React.FC<{
  title: string;
  path?: string;
  children?: ReactNode;
  triggerProps?: any;
  size?: ButtonSize;
}> = ({ children, title, path, triggerProps, size }) => {
  return (
    <>
      {path ? (
        <Link to={`/${path}`}>
          <button
            {...triggerProps}
            className={`flex items-center justify-center  px-4 py-2 text-[#8F8F8F] hover:text-[#272727] rounded-md ${size}`}
          >
            <span className="flex items-center">{children}</span>
            <span>{title}</span>
          </button>
        </Link>
      ) : (
        <button
          {...triggerProps}
          className={`flex items-center justify-center px-4 py-2 text-[#8F8F8F] hover:text-[#272727] rounded-md  ${size}`}
        >
          <span className="flex items-center">{children}</span>
          <span>{title}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
