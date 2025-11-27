// twMerge 라이브러리 설치 필요
import { twMerge } from "tailwind-merge";

const BlueButton = ({ text, className = "", onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={twMerge(
          "flex h-[43px] w-[148px] items-center justify-center rounded-[8px] bg-[#008CFF] px-[16px] py-[12px] text-white hover:cursor-pointer",
          className
        )}
      >
        {text}
      </button>
    </>
  );
};

export default BlueButton;
