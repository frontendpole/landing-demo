import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/FacebookIcon";
import { GithubIcon } from "../../assets/GithubIcon";
import { LinkedinIcon } from "../../assets/LinkedinIcon";
import { MediumIcon } from "../../assets/MediumIcon";
import { TwitterIcon } from "../../assets/TwitterIcon";
import { FooterList } from "../../molecules";
import { FooterListItem } from "../../molecules/footer-list";

const PRODUCT_LIST: FooterListItem[] = [
  { label: "Tiramisu chocolate", path: "#" },
  { label: "Pastry tart", path: "#" },
  { label: "Pllipop brownie", path: "#" },
];

const COLLABO_LIST: FooterListItem[] = [
  { label: "Tiramisu chocolate", path: "#" },
  { label: "Pastry tart", path: "#" },
  { label: "Pllipop brownie", path: "#" },
];

const ICONS = [
  { path: "#", Icon: <FacebookIcon />, title: "Facebook" },
  { path: "#", Icon: <TwitterIcon />, title: "Twitter" },
  { path: "#", Icon: <LinkedinIcon />, title: "LinkedIn" },
  { path: "#", Icon: <MediumIcon />, title: "Medium" },
  { path: "#", Icon: <GithubIcon />, title: "Github" },
];

const PRIVACY_LINKS: FooterListItem[] = [
  { label: "Legal", path: "#" },
  { label: "Privacy policy", path: "#" },
  { label: "Proud to be Open Source", path: "#" },
];

export const Footer = () => {
  return (
    <footer className="w-screen bg-dark-02 px-[8%] pt-[66px] pb-[38px] flex flex-col justify-between">
      <div className="flex items-center gap-[90px] flex-wrap">
        <FooterList header="Products" items={PRODUCT_LIST} />
        <FooterList header="Collaboration" items={COLLABO_LIST} />
      </div>
      <div className="flex justify-end items-center gap-[18px] pr-[23px] mt-[34px]">
        {ICONS.map((el, i) => (
          <Link
            key={i}
            to={el.path}
            title={el.title}
            className={"hover:scale-110"}
          >
            {el.Icon}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-[37px] pt-[11px] border-t-lime border-t-[2px] w-full mt-[49px] flex-wrap">
        <p className="text-white">
          © 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.
        </p>
        {PRIVACY_LINKS.map((el, i) => (
          <Link key={i} to={el.path} title={el.label}>
            <p className="text-white hover:underline">{el.label}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
};
