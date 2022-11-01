import React, { useState } from "react";
import { CircleButton } from "../../atoms";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface FoldableListItemProps {
  index: number;
  title: string;
  content: string;
}

export const FoldableListItem = ({
  index,
  title,
  content,
}: FoldableListItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [parent] = useAutoAnimate();

  return (
    <li className="flex justify-between items-center border-b-dark-03 border-b-[1px] pb-[30px]">
      <div ref={parent} className="flex flex-col flex-1 ">
        <p>{`${(index + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}.`}</p>
        <h3>{title}</h3>
        {isExpanded && <p className="mt-[40px]">{content}</p>}
      </div>
      <CircleButton onClick={() => setIsExpanded(!isExpanded)} />
    </li>
  );
};
