import { useLocation } from "react-router-dom";
import { Button } from "../../atoms";
import { NavBar } from "../../molecules";

export const Header = () => {
  const { pathname } = useLocation();

  const handleClick = () => {
    // TODO: redirect to contact page
  };

  return (
    <header className="w-full flex flex-col px-[8%] pt-[54px]">
      <div className="w-full flex justify-between items-center ">
        <NavBar />
        {pathname !== "contact" && (
          <Button size="small" label="Contact Us" onClick={handleClick} />
        )}
      </div>
      <h2 className="text-10 leading-13 text-dark-03 mt-[17px]">Future one</h2>
    </header>
  );
};
