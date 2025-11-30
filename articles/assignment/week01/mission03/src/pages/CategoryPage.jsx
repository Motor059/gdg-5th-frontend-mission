import { useState } from 'react';
import { itemData } from '../data/mockData'; 
import Cart from './Cart';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const categories = ['의류', '전자기기', '화장품', '식품'];
  
  const filteredData = selectedCategory === '전체' 
    ? itemData 
    : itemData.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 mt-10 min-h-screen flex flex-col items-center w-full">
      <div className="w-full max-w-[850px] flex flex-col gap-6">
        
        {/* 상단 카테고리 선택 영역 */}
        <div className="flex justify-start relative z-20">
          <div className="w-[200px]">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full border border-gray-400 rounded-[4px] p-3 bg-white text-left text-gray-500 font-medium hover:bg-gray-50 flex justify-between items-center"
            >
              <span className={selectedCategory !== '전체' ? 'text-black' : ''}>
                {selectedCategory === '전체' ? '카테고리 선택' : selectedCategory}
              </span>
            </button>

            {/* 드롭다운 목록 */}
            {isMenuOpen && (
              <div className="absolute top-[50px] w-[200px] flex flex-col border border-gray-300 rounded-[4px] bg-[#EEEEEE] overflow-hidden shadow-lg">
                <button 
                  onClick={() => { setSelectedCategory('전체'); setIsMenuOpen(false); }}
                  className="p-3 text-left text-sm border-b text-black"
                >
                  전체 보기
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsMenuOpen(false); }}
                    className={`p-3 text-left text-sm border-b last:border-none hover:bg-gray-200 transition-colors
                      ${selectedCategory === cat ? 'font-bold text-black' : 'text-gray-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 상품 리스트 영역 */}
        <div className="w-full">
          <div className="flex justify-end mb-2">
            <span className="text-sm font-bold text-gray-500 cursor-pointer underline">내 구매 내역</span>
          </div>
          <Cart items={filteredData} />
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;