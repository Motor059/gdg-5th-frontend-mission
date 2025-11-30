import { useState } from "react";
import BlueButton from "../admin/BlueButton";
import ToggleInput from "../admin/ToggleInput"

const FlexStyle = "flex w-[285px] justify-between items-center";
const InputStyle =
  "placeholder:text-[14px] w-[205px] h-[39px] rounded-[8px] border border-[#8F8F8F] px-[12px] py-[6px]";
const API_URL = import.meta.env.VITE_API_URL;

const StockBox = ({
  stockExist = true,
  section2Exist = false,
  comment = false,
}) => {
  // 상태
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [count, setCount] = useState(0);
  // 카테고리 값
  const [category, setCategory] = useState("");

  // 상품 등록 api ---------------------------------------------
  const handleRegister = async () => {
    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }

    const productData = {
      name: itemName,
      price: Number(price),
      stock: Number(stock), // 또는 count
      category: category
    };

    try {
      const response = await fetch('http://192.168.158.20:8080/admin/products', { 
        method: 'POST', // 데이터를 보낼 때는 POST
        headers: {
          'Content-Type': 'application/json', // "나 JSON 보낸다"라고 알려줌
        },
        body: JSON.stringify(productData) // 데이터를 문자열로 변환해서 보냄
      });

      if (response.ok) {
        const result = await response.json();
        console.log("서버 응답:", result);
        alert(`"${itemName}" 상품이 성공적으로 등록되었습니다!`);
        
        // 입력창 초기화
        setItemName("");
        setPrice(0);
        setStock(0);
        setCategory("");
      } else {
        alert("상품 등록 실패!");
      }

    } catch (error) {
      console.error("에러 발생:", error);
      alert("네트워크 오류가 발생했습니다.");
    }
  };

  // 재고 추가 api ---------------------------------------------
  async function handleIncrease() {
    console.log("추가 버튼 클릭");

    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }
    console.log(`${itemName} ${count} 가 추가되었습니다.`);
    try {
      // ...
    } catch (error) {
      console.log("Error POST data: ", error);
    }
  }

  // 상품 삭제 api ---------------------------------------------
  async function handleDelete() {
    console.log("삭제 버튼 클릭");

    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }
    console.log(`${itemName} 가 삭제되었습니다.`);
    try {
      // ...
    } catch (error) {
      console.log("Error POST data: ", error);
    }
  }

  return (
    <div className="mb-[20px] w-full flex flex-col gap-[20px] rounded-[8px] border border-[#8F8F8F] bg-white p-[24px] shadow-sm">
      <section className="flex flex-col gap-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="font-bold text-gray-700 w-[50px]">상품명</span>
            <input
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="h-[40px] w-full flex-1 rounded-[8px] border border-[#8F8F8F] px-[12px] outline-none focus:border-blue-500"
              placeholder="상품명 입력..."
            />
          </div>

          {stockExist && (
            <div className="flex items-center gap-3 flex-1">
              <span className="font-bold text-gray-700 w-[40px]">수량</span>
              <input
                type="number"
                value={section2Exist ? stock : count}
                onChange={(e) => section2Exist ? setStock(e.target.value) : setCount(e.target.value)}
                className="h-[40px] w-full flex-1 rounded-[8px] border border-[#8F8F8F] px-[12px] outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>

        {section2Exist && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-bold text-gray-700 w-[50px]">가격</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="h-[40px] w-full flex-1 rounded-[8px] border border-[#8F8F8F] px-[12px] outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-3 flex-1">
              <span className="font-bold text-gray-700 w-[70px] whitespace-nowrap">카테고리</span>
              <div className="flex-1">
                <ToggleInput 
                  category={category} 
                  setState={setCategory} 
                  togglePlaceholder="카테고리 선택" 
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mt-2 flex items-end justify-between gap-4">
        <div className="flex-1 text-[12px] text-[#A5A5A5] break-keep leading-tight mr-4">
          {comment && "* 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요."}
        </div>

        <div className="shrink-0">
          {!stockExist ? (
            <BlueButton
              onClick={handleDelete}
              className="h-[35px] w-[80px] bg-red-500 border-red-500 hover:bg-red-600 text-white rounded-[6px]"
              text="삭제"
            />
          ) : !section2Exist ? (
            <BlueButton
              onClick={handleIncrease}
              className="h-[35px] w-[80px] rounded-[6px]"
              text="추가"
            />
          ) : (
            <BlueButton
              onClick={handleRegister}
              className="h-[35px] w-[80px] rounded-[6px]"
              text="등록"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default StockBox;