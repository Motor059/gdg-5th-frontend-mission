/* import { useState } from "react";
import logoImg from "../assets/gdg_logo.svg";

const Content = () => {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  return (
    <main className="flex-grow w-full flex flex-col items-center container mx-auto p-4">
      <div className="mt-[50px] flex flex-row gap-[20px] justify-center">
        
        {}
        <input
          className="w-[484px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
          placeholder="상품 검색..."
          onChange={handleInput}
          value={content}
        />

        {}
        <button
          className="flex w-[120px] items-center justify-center rounded-[8px] bg-[#008CFF] px-[16px] py-[12px] text-white hover:cursor-pointer"
          onClick={() => console.log(content, "검색")}
        >
          검색
        </button>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center">
        <img
          src={logoImg}
          alt="logo_background"
          className="opacity-[0.15] w-[400px]"
        />
        <p className="text-gray-500 mt-4">검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;
*/