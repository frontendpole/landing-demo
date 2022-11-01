import { QuoteIcon } from "../../../assets/QuoteIcon";
import { QuoteReversedIcon } from "../../../assets/QuoteReversedIcon";

export const QuoteSection = () => {
  return (
    <section className="flex flex-col gap-20 laptop:gap-0 laptop:flex-row laptop:justify-between laptop:items-center flex-1 pt-12 px-[8%] laptop:pl-[8%] laptop:pr-[25%]">
      <div className="border-l-lime border-l-[10px] flex justify-center items-center flex-1 h-[250px]">
        <h3 className="text-lime max-w-[60%]">
          Bibendum at varius vel pharetra vel turpis nunc eget lorem.
        </h3>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="animate-bounce">
          <QuoteIcon />
        </div>

        <p className="mt-6 text-dark-03 italic">
          Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus
          in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus
          faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum
          faucibus. Tristique risus nec feugiat in fermentum. Elit duis
          tristique sollicitudin nibh sit amet commodo nulla.
        </p>
        <div className="flex justify-between">
          <p className="text-dark-03 pt-[13px]">
            Faucibus Vitae, Office Assistant
          </p>
          <div className="animate-bounce">
            <QuoteReversedIcon />
          </div>
        </div>
        <img
          src="/images/logo.svg"
          alt="Invision logo"
          width={86}
          height={29}
          className="mt-[13px]"
        />
      </div>
    </section>
  );
};
