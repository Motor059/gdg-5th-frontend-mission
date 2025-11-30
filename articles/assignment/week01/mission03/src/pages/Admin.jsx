import AdminNavbar from "../components/admin/AdminNavbar";
import StockBox from "../components/admin/StockBox";

const Admin = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[800px] mt-10 flex flex-col gap-10 px-4 pb-20"></div>
          <section className="flex flex-col gap-4">
          <div className="text-[20px] font-[600]">상품 등록</div>
          <StockBox section2Exist={true} comment={true} />
        </section>

        <section className="flex flex-col gap-4">
          <div className="text-[20px] font-[600]">재고 추가</div>
          <StockBox />
        </section>

        <section className="flex flex-col gap-4">
          <div className="text-[20px] font-[600]">상품 삭제</div>
          <StockBox stockExist={false} />
        </section>

        <div className="h-[100px]"></div>
      </div>
    </>
  );
};

export default Admin;
