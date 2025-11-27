import { useState } from 'react';
import { itemData } from '../data/mockData';
import Cart from './Cart';

const PricePage = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredData, setFilteredData] = useState(itemData);

  // 가격 필터링 로직
  const handleSearch = () => {
    const min = minPrice === '' ? 0 : Number(minPrice);
    const max = maxPrice === '' ? 99999999 : Number(maxPrice);
    
    const result = itemData.filter(item => item.price >= min && item.price <= max);
    setFilteredData(result);
  };

  return (
    <div className="container mx-auto p-4 mt-10 min-h-screen flex flex-col items-center w-full">
      <div className="w-full max-w-[850px] mb-10 flex justify-center items-center gap-4">
        
        <input 
          type="number" 
          placeholder="0" 
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="flex-1 border border-gray-400 rounded-[8px] p-3 focus:outline-none focus:border-[#008CFF]"
        />        
        <input 
          type="number" 
          placeholder="0" 
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="flex-1 border border-gray-400 rounded-[8px] p-3 focus:outline-none focus:border-[#008CFF]"
        />
        
        {/* 검색 버튼 */}
        <button 
          onClick={handleSearch}
          className="bg-[#008CFF] text-white px-8 py-3 rounded-[8px] font-bold hover:bg-blue-600 transition w-[120px]"
        >
          검색
        </button>
      </div>

      {/* 상품 리스트 영역 */}
      <div className="w-full max-w-[850px]">
         <div className="flex justify-end mb-2">
            <span className="text-sm font-bold text-gray-500 cursor-pointer underline">내 구매 내역</span>
         </div>
         {filteredData.length > 0 ? (
            <Cart items={filteredData} />
         ) : (
            <div className="text-center py-20 text-gray-500 border border-dashed border-gray-300 rounded-[8px]">
              조건에 맞는 상품이 없습니다.
            </div>
         )}
      </div>

    </div>
  );
};

export default PricePage;