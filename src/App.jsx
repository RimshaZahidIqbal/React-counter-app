import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  const increaseCount = () => setCount(prevCount => (prevCount < 20 ? prevCount + 1 : 20));
  const Reset = () => setCount(0);

  return (
    <>
      <div className="flex flex-col bg-app-bg  justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center">
        <h1 className="text-center text-[48px] font-extrabold text-[#ff8c00] mb-5 ">
          React Counter
        </h1>

        <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center w-96">
          <div className="bg-[#1f2123] border-4 text-[#ff8c00] border-[#ff8c00]  rounded-full w-36 h-36 flex items-center justify-center text-6xl font-bold mb-6 shadow-custom-orange animate-[scale_1s_ease-in-out]">
            {count}
          </div>

          <div className="flex gap-4">
            <button
              className="p-4 bg-[#2c3138] w-20 h-20 text-white rounded-xl hover:bg-[#575d64]"
              onClick={decreaseCount}>
              <i className="fa-solid fa-minus text-xl font-black"></i>
            </button>

            <button
              className="p-4 bg-[#ff8c00] h-20 w-auto text-2xl text-white rounded-xl hover:bg-[#e07b00]"
              onClick={Reset}>
              Reset
            </button>

            <button
              className="p-4 bg-[#2c3138] w-20 h-20 text-white rounded-xl hover:bg-[#575d64]"
              onClick={increaseCount}>
              <i className="fa-solid fa-plus text-xl font-black"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
