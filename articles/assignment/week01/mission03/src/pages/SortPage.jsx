import { useState } from 'react';
import { itemData } from '../data/mockData';
import Cart from './Cart';

const SortPage = () => {
  const [sortType, setSortType] = useState(''); // 정렬 기준
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 드롭다운 열림 상태

  // 정렬 로직
  const getSortedData = () => {
    const copied = [...itemData];
    if (sortType === 'name') return copied.sort((a, b) => a.itemName.localeCompare(b.itemName));
    if (sortType === 'price') return copied.sort((a, b) => a.price - b.price);
    return copied;
  };

  const sortedData = getSortedData();

  const sortLabel = {
    '': '정렬 기준 선택',
    'name': '이름순',
    'price': '가격순'
  };

  return (
    <div className="container mx-auto p-4 mt-10 min-h-screen flex flex-col items-center w-full">
      <div className="w-full max-w-[850px] flex flex-col gap-6">
        {/* 상단 정렬 선택 영역 */}
        <div className="flex justify-start relative z-20">
          <div className="w-[200px]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full border border-gray-400 rounded-[4px] p-3 bg-white text-left text-gray-500 font-medium hover:bg-gray-50 flex justify-between items-center"
            >
              <span>{sortLabel[sortType]}</span>
            </button>

            {/* 드롭다운 목록 */}
            {isMenuOpen && (
              <div className="absolute top-[50px] w-[200px] flex flex-col border border-gray-300 rounded-[4px] bg-[#EEEEEE] overflow-hidden shadow-lg">
                <button 
                  onClick={() => { setSortType('name'); setIsMenuOpen(false); }}
                  className="p-3 text-left text-sm border-b hover:bg-gray-200 bg-white text-black"
                >
                  이름순
                </button>
                <button 
                  onClick={() => { setSortType('price'); setIsMenuOpen(false); }}
                  className="p-3 text-left text-sm hover:bg-gray-100"
                >
                  가격순
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 상품 리스트 영역 */}
        <div className="w-full">
          <div className="flex justify-end mb-2">
            <span className="text-sm font-bold text-gray-600 cursor-pointer underline">내 구매 내역</span>
          </div>
          <Cart items={sortedData} />
        </div>

      </div>
    </div>
  );
};

export default SortPage;