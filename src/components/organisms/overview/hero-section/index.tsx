import { Button } from "../../../atoms";

export const HeroSection = () => {
  const handleClick = () => {
    // TODO redirect to ...
  };
  return (
    <section className="flex flex-col gap-20 laptop:gap-0 laptop:items-center laptop:justify-between flex-1 mt-[104px] pl-[8%] laptop:pr-[3%] flex-wrap laptop:flex-row w-full">
      <div className="flex-col flex-1">
        <h1 className="max-w-[90%]">
          <span className="text-lime">Duis aute irure</span> dolor in
          reprehenderit
        </h1>
        <p className="mt-4 max-w-sm text-dark-01">
          Nam at lectus urna duis convallis. Id semper risus in hendrerit
          gravida rutrum quisque non tellus. Elit eget gravida cum sociis
          natoque. Ultrices neque ornare aenean euismod elementum nisi quis
          eleifend. Arcu felis bibendum ut tristique et egestas.
        </p>
        <Button label="Discover now" style="mt-4" onClick={handleClick} />
      </div>
      <div className="flex-1">
        <img
          className="w-full"
          src="/images/picture.svg"
          alt="person by the desk"
        />
      </div>
    </section>
  );
};
