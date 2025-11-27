import { useState } from 'react';
import { itemData } from '../data/mockData'; 
import Cart from './Cart'; 

const Home = () => {
  const [content, setContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const handleSearch = () => {
    console.log(content, "검색"); 
    setSearchQuery(content); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredData = itemData.filter((item) =>
    item.itemName.includes(searchQuery)
  );

  return (
    <div className="container mx-auto p-4 mt-10 min-h-screen flex flex-col items-center w-full">
      <div className="w-full max-w-[850px] mb-10 flex flex-row gap-4 justify-center">
        
        <input
          className="flex-1 rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px] focus:outline-none focus:border-[#008CFF]"
          placeholder="상품 검색..."
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          value={content}
        />

        <button
          className="w-[120px] flex items-center justify-center rounded-[8px] bg-[#008CFF] px-[16px] py-[12px] text-white hover:cursor-pointer hover:bg-blue-600 transition font-bold"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>

      <Cart items={filteredData} />
    </div>
  );
};

export default Home;