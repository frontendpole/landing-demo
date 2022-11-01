import { PokeballIcon } from "../../../assets/PokeballIcon";
import { RingIcon } from "../../../assets/RingIcon";
import { RobotIcon } from "../../../assets/RobotIcon";
import { ScissorsIcon } from "../../../assets/ScissorsIcon";
import { Card } from "../../../molecules";

type CardItem = {
  path: string;
  IconGray: JSX.Element;
  IconWhite: JSX.Element;
};

const CARDS: CardItem[] = [
  {
    path: "#",
    IconGray: <RingIcon />,
    IconWhite: <RingIcon color="#ffffff" />,
  },
  {
    path: "#",
    IconGray: <ScissorsIcon />,
    IconWhite: <ScissorsIcon color="#ffffff" />,
  },
  {
    path: "#",
    IconGray: <RobotIcon />,
    IconWhite: <RobotIcon color="#ffffff" />,
  },
  {
    path: "#",
    IconGray: <PokeballIcon />,
    IconWhite: <PokeballIcon color="#ffffff" />,
  },
];

export const CardsSection = () => {
  return (
    <section className="flex flex-col flex-1 py-12 px-[8%] mt-12">
      <h2 className="text-dark-03">
        Massa tempor nec feugiat nisl pretium fusce
      </h2>
      <p className="text-dark-03 mt-6 max-w-[85%]">
        Pellentesque <span className="font-semibold">habitant</span> morbi
        tristique senectus et netus et malesuada.{" "}
        <span className="font-semibold">Ipsum faucibus</span> vitae aliquet nec
        ullamcorper sit amet risus nullam. Dictum varius duis at consectetur
        <span className="font-semibold">lorem donec</span> massa sapien. Massa
        tempor nec feugiat nisl pretium fusce.
      </p>
      <p className="text-dark-03 mt-6">Elit scelerisque mauris pellentesque?</p>

      <ul className="flex flex-col items-center gap-10 laptop:gap-0 laptop:flex-row laptop:justify-between mt-6 ">
        {CARDS.map((el, i) => (
          <Card key={i} item={el} />
        ))}
      </ul>
    </section>
  );
};
