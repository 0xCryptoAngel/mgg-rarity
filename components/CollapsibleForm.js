import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CollapsibleForm = (props) => {
  const { heading, element } = props;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex flex-col">
      <div
        className="flex py-3 border-t border-gray-500 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span>{heading}</span>
        <FiChevronDown
          size={20}
          className={`mt-1 ml-auto duration-150 ${
            collapsed ? "" : "transform -rotate-90"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden duration-300 ${
          collapsed ? "max-h-0" : "max-h-[1000px]"
        } `}
      >
        {element}
      </div>
    </div>
  );
};
export default CollapsibleForm;
