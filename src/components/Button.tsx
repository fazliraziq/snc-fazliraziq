import { FunctionComponent, MouseEvent, PropsWithChildren } from "react";
import classNames from "classnames";
import { Person } from "@/utils/common/person";

type ButtonProps = {
  onClickHandler?: (person : Person)  => void;
  name:Person
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClickHandler,
  name
}) => {
  const handleClick = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (onClickHandler) {
      const target = event.target as HTMLButtonElement;
      onClickHandler(target.name as Person); // Pass person to onClickHandler
    }
  };
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black")}
      name={name}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
