import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen border-2 border-pink-600 bg-amber-50">
        <div className="flex flex-col justify-center items-center border border-purple-400 rounded-lg p-12 shadow-md">
          <p className="text-2xl">
            <span className="font-bold">Count:</span> {count}
          </p>

          <div className="flex justify-center items-center gap-5 mt-6">
            {/* increase button */}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className="btn btn-primary"
            >
              +
            </button>

            {/* decrease button */}
            <button
              onClick={() => {
                setCount(count - 1);
              }}
              className="btn btn-error text-white"
            >
              -
            </button>
          </div>

          {/* reset button */}
          <button
            onClick={() => {
              setCount(0);
            }}
            className="btn btn-success mt-6 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
