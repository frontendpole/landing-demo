import { useLocation } from "react-router-dom";
import { NavItem } from "../../atoms";

type NavItemType = {
  label: string;
  path: string;
};

const NAV_ITEMS: NavItemType[] = [
  { label: "Overview", path: "/" },
  { label: "About", path: "#" },
  { label: "Resources", path: "#" },
  { label: "Network", path: "#" },
  { label: "Cloud", path: "#" },
  { label: "Download", path: "#" },
  { label: "Contact", path: "#" },
];

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-col laptop:flex-row laptop:items-center gap-[30px] flex-1 laptop:justify-center flex-wrap">
      {NAV_ITEMS.map((el, i) => (
        <NavItem
          key={i}
          path={el.path}
          label={el.label}
          isActive={el.path === pathname}
        />
      ))}
    </nav>
  );
};
