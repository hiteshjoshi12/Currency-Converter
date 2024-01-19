import React, { useEffect, useRef, useState } from "react";

const Main = () => {
    const [keysArray, setKeyArray] = useState([]);
    const [convertedResult, setConvertedResult] = useState(null);
    const fromRef = useRef(null);
    const toRef = useRef(null);
    const amountRef = useRef(null);

    const getsymbol = async () => {
        try {
            const data = await fetch("https://api.forexrateapi.com/v1/symbols?api_key=[Your_Api_Key]");
            const response = await data.json();
            console.log(response);

            setKeyArray(Object.keys(response.symbols));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getsymbol();
    }, []);

    const handleConversion = async (e) => {
        e.preventDefault();
        const selectedFrom = fromRef.current.value;
        const selectedTo = toRef.current.value;
        const selectedAmount = amountRef.current.value;

        try {
            const data = await fetch(
                `https://api.forexrateapi.com/v1/convert?api_key=[Your_api_key]&from=${selectedFrom}&to=${selectedTo}&amount=${selectedAmount}`
            );
            const response = await data.json();
            console.log(response);
            setConvertedResult(response.result.toFixed(2));
            
        } catch (error) {
            console.error("Error fetching conversion result:", error);
            
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
          <div className="w-96 bg-white rounded-lg p-6">
            <h1 className="text-xl mb-5">Currency Converter</h1>
            <form onSubmit={handleConversion} className="flex flex-col">
              <label className="mb-1">Enter Amount</label>
              <input
                ref={amountRef}
                type="number"
                className="py-2 mb-4  rounded-lg"
                placeholder="Amount"
              />
      
              <label className="mb-1">Convert From</label>
              <select
                ref={fromRef}
                className="my-2 mb-4 py-2 rounded-lg"
              >
                {keysArray.map((symbol, index) => (
                  <option key={index}>{symbol}</option>
                ))}
              </select>
      
              <label className="mb-1">Convert To</label>
              <select
                ref={toRef}
                className="my-2 mb-4 py-2 rounded-lg"
              >
                {keysArray.map((symbol, index) => (
                  <option key={index}>{symbol}</option>
                ))}
              </select>
      
              <button
                type="submit"
                className="bg-blue-700 py-4 mb-4 rounded-lg text-white"
              >
                Convert
              </button>
      
              {convertedResult !== null && (
                <label className="py-2 border-solid border-2">
                  Conversion Result: {convertedResult}
                </label>
              )}
            </form>
          </div>
        </div>
      );
      
};

export default Main;
