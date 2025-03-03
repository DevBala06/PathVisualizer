import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export function PlayButton({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
  className = "",
  buttonText,
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonText?: string;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className={`disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full  shadow-md border-none active:ring-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30 flex items-center justify-center gap-2 ${className}`}
    >
      {isGraphVisualized ? (
        <>
          <GrPowerReset className="text-lg text-white" />
          {buttonText || ""}
        </>
      ) : (
        <>
          <BsFillPlayFill className="text-lg text-white" />
          {buttonText || ""}
        </>
      )}
    </button>
  );
}
