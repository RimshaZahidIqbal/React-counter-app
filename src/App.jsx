import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(prevCount => prevCount + 1);
  const handleDecrease = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);  // No change needed

  return (
    <>
      <div className="flex flex-col bg-black justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center">
        <h1 className="text-center text-4xl font-extrabold text-orange-500 mb-5">
          JS Counter
        </h1>

        <div className="bg-black bg-opacity-60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl flex flex-col items-center w-96">
          <div className="counter text-orange-500 bg-gray-900 border-4 border-orange-500 rounded-full w-32 h-32 flex items-center justify-center text-6xl font-bold mb-6 shadow-xl animate-[scale_1s_ease-in-out]">
            {count}
          </div>

          <div className="flex gap-4">
            <button
              className="p-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 active:scale-95 transition-transform"
              onClick={handleDecrease}>
              <i className="fa-solid fa-minus text-xl"></i>
            </button>

            <button
              className="p-4 bg-orange-500 text-white rounded-xl hover:bg-orange-400 active:scale-95 transition-transform"
              onClick={handleReset}>
              Reset
            </button>

            <button
              className="p-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 active:scale-95 transition-transform"
              onClick={handleIncrease}>
              <i className="fa-solid fa-plus text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
