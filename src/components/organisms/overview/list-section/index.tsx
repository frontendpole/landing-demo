import { FoldableListItem } from "../../../molecules";

type FoldableItem = {
  title: string;
  content: string;
};

const FOLDABLE_ITEMS: FoldableItem[] = [
  {
    title: "Arcu non odio",
    content:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
  {
    title: "Eget gravida cum sociis",
    content:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
  {
    title: "Massa massa ultricies",
    content:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
];

export const ListSection = () => {
  return (
    <section className="flex flex-col flex-1 pt-12 px-[8%]">
      <h2 className="w-full text-center">Lacinia quis vel eros tempor orci.</h2>
      <ul className="flex flex-col gap-6 mt-6">
        {FOLDABLE_ITEMS.map((el, i) => (
          <FoldableListItem
            key={i}
            index={i}
            title={el.title}
            content={el.content}
          />
        ))}
      </ul>
    </section>
  );
};
