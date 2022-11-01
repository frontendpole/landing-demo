import classNames from "classnames";
import { useState } from "react";

interface CircleButtonProps {
  onClick: () => void;
}

export const CircleButton = ({ onClick }: CircleButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "w-[43px] h-[43px] border-[3px] border-lime rounded-full flex justify-center items-center relative",
        { "animate-pulse": !isOpen }
      )}
    >
      <div className="w-6 h-[3px] bg-lime" />
      {!isOpen && <div className="h-6 w-[3px] bg-lime absolute" />}
    </button>
  );
};
