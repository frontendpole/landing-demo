import classNames from "classnames";
import { Link } from "react-router-dom";

interface NavItemProps {
  path: string;
  label: string;
  isActive: boolean;
  style?: string;
}

export const NavItem = ({ path, label, isActive, style }: NavItemProps) => {
  return (
    <Link
      to={path}
      className={classNames(
        "cursor-pointer text-base text-dark-01 hover:scale-110",
        style,
        {
          "text-dark-03 underline": isActive,
        }
      )}
      title={label}
    >
      {label}
    </Link>
  );
};
