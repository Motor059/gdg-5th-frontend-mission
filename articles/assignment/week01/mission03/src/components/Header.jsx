import logoImg from "../assets/gdg_logo.svg";

const Header = ({ setPage, page }) => {
  return (
    <header className="w-full border-b border-[#D2D2D2] bg-white sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        
        {/* 1. 로고 (공통) */}
        <div className="cursor-pointer" onClick={() => setPage('home')}>
          <img src={logoImg} alt="logo" className="w-[120px]" />
        </div>

        {/* 2. 조건부 렌더링: 관리자 페이지가 아닐 때만 메뉴 표시 */}
        {page !== 'admin' ? (
          <>
            <div className="flex flex-row gap-[22px] font-semibold text-[#848F92]">
              <div 
                className={`cursor-pointer hover:text-[#008CFF] ${page === 'category' && 'text-[#008CFF]'}`} 
                onClick={() => setPage('category')}
              >
                카테고리 필터링
              </div>
              <div 
                className={`cursor-pointer hover:text-[#008CFF] ${page === 'price' && 'text-[#008CFF]'}`}
                onClick={() => setPage('price')}
              >
                가격 범위 필터링
              </div>
              <div 
                className={`cursor-pointer hover:text-[#008CFF] ${page === 'sort' && 'text-[#008CFF]'}`}
                onClick={() => setPage('sort')}
              >
                상품 정렬
              </div>
            </div>

            {/* 관리자 버튼 (관리자 페이지로 이동) */}
            <div>
              <button 
                className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:bg-blue-50"
                onClick={() => setPage("admin")}
              >
                관리자
              </button>
            </div>
          </>
        ) : (
          /* 3. 관리자 페이지일 때 보여줄 내용 */
          <div>
             <button 
                className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:bg-blue-50"
                onClick={() => setPage("home")}
              >
                소비자
              </button>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;