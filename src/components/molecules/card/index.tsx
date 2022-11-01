import { useAutoAnimate } from "@formkit/auto-animate/react";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/ArrowIcon";

type Item = {
  IconGray: JSX.Element;
  IconWhite: JSX.Element;
  path: string;
};

interface CardProps {
  item: Item;
}

export const Card = ({ item: { IconGray, IconWhite, path } }: CardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [parent] = useAutoAnimate();
  const [divParent] = useAutoAnimate();

  const handleClick = () => {
    // TODO: redirect to item.path
  };
  return (
    <li
      onClick={handleClick}
      className={classNames(
        "flex justify-center items-center rounded bg-white w-[222px] h-[175px] hover:bg-lime relative cursor-pointer hover:animate-pulse"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: "0px 2px 8px rgba(41, 55, 69, 0.15)" }}
      ref={parent}
    >
      {isHovered ? <div>{IconWhite}</div> : <div>{IconGray}</div>}
      <div
        ref={divParent}
        className={classNames(
          "absolute bottom-5 right-[10px] flex justify-end items-center gap-1"
        )}
      >
        <Link
          className={classNames("text-base text-white underline font-light", {
            "opacity-0": !isHovered,
          })}
          to={path}
          title="View details"
        >
          View Details
        </Link>

        <div className="-rotate-90">
          <ArrowIcon color={isHovered ? "#ffffff" : "#29CC6A"} />
        </div>
      </div>
    </li>
  );
};
