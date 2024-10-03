import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  // Hàm 1: Nhập số và toán tử
  const inputDigit = (value) => {};

  // Hàm 2: Thực hiện phép tính
  const performOperation = (operator) => {};

  // Hàm 3: Xóa màn hình
  const clearDisplay = () => {};

  // Hàm 4: Tính toán kết quả
  const calculateResult = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4 p-2 bg-gray-200 rounded">
          <div className="text-right text-2xl">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "/" ? performOperation(btn) : inputDigit(btn)
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "*" ? performOperation(btn) : inputDigit(btn)
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "-" ? performOperation(btn) : inputDigit(btn)
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => inputDigit("0")}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            0
          </button>
          <button
            onClick={() => inputDigit(".")}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            .
          </button>
          <button
            onClick={calculateResult}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            =
          </button>
          <button
            onClick={() => performOperation("+")}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={clearDisplay}
            className="col-span-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
