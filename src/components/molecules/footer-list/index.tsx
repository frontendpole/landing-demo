import { Link } from "react-router-dom";

export type FooterListItem = {
  path: string;
  label: string;
};

interface FooterListProps {
  header: string;
  items: FooterListItem[];
}

export const FooterList = ({ header, items }: FooterListProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-white">{header}</h4>
      <ul className="mt-[11px] flex flex-col gap-5">
        {items.map((el, i) => (
          <li key={i}>
            <Link to={el.path} title={el.label}>
              <p className="text-white hover:underline">{el.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
