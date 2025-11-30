import { useState } from 'react';
import logoImg from "../assets/gdg_logo.svg";

const ProductCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    console.log(item.name, count);
    setIsAdded(true);
    alert(`${item.name} ${count}개가 장바구니에 담겼습니다.`);
  };

  return (
    <div className="w-full border border-gray-300 rounded-[8px] p-7 flex items-center justify-between bg-white mb-4 shadow-sm">
      <div className="flex flex-col gap-8 w-[30%]">
        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
        <div className="text-sm text-gray-500">
          <span className="font-bold text-black">{item.price.toLocaleString()} 원</span>
          <span className="ml-2 text-gray-400">남은 수량: {item.stock}개</span>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="flex items-center border border-gray-300 rounded-[4px] px-3 py-2 bg-white gap-6">
          <button onClick={() => count > 1 && setCount(count - 1)} className="font-bold text-lg w-6">-</button>
          <span className="font-bold w-8 text-center">{count}</span>
          <button onClick={() => setCount(count + 1)} className="font-bold text-lg w-6">+</button>
        </div>
      </div>

      <div className="w-[20%] flex justify-end">
        <button 
          onClick={handleAddToCart} disabled={isAdded}
          className={`w-[100px] py-2 rounded-[4px] font-bold text-white ${isAdded ? 'bg-gray-400' : 'bg-[#008CFF]'}`}
        >
          {isAdded ? '담김' : '장바구니'}
        </button>
      </div>
    </div>
  );
};

const Cart = ({ items }) => {
  return (
    <div className="w-full max-w-[850px] flex flex-col gap-">
      {items.length > 0 ? (
        items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
            <div className="w-full flex flex-col justify-center items-center min-h-[60vh]">
              <img
                src={logoImg}
                alt="logo_background"
                className="opacity-[0.15] w-[400px]"
              />
              <p className="text-gray-500 mt-4">검색 결과가 없습니다.</p>
            </div>
      )}
    </div>
  );
};

export default Cart;