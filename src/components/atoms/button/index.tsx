import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  style?: string;
  labelStyle?: string;
  secondary?: boolean;
  size?: "small" | "big";
}

export const Button = ({
  onClick,
  disabled,
  label,
  style,
  labelStyle,
  secondary = false,
  size = "big",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-[63px] py-[10px] bg-lime flex justify-center items-center text-white hover:text-lime hover:bg-white border-lime border-[2px] active:bg-darkGreen active:text-white active:border-white",
        style,
        {
          "px-[53px] py-[6px]": size === "small",
          "border-white border-[2px] px-9 py-[8px]": secondary,
        }
      )}
      onClick={disabled ? () => null : onClick}
      disabled={disabled}
      name={label}
    >
      <>
        {label && (
          <p className={classNames("whitespace-nowrap", labelStyle)}>{label}</p>
        )}
      </>
    </button>
  );
};
