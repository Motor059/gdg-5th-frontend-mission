import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="fixed flex h-[60px] w-full items-center justify-around border-b border-[#D2D2D2] bg-white">
        <img
          onClick={() => (window.location.href = "/")}
          src="gdg-favicon.svg"
        ></img>
        <div className="w-[408px]"></div>
        <button
          onClick={() => nav("/")}
          className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:cursor-pointer"
        >
          소비자
        </button>
      </div>
    </>
  );
};

export default AdminNavbar;
