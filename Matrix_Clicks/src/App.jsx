import { useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(Array(9).fill(false));
  const [isRipple, setIsRipple] = useState(false);

  const changeColor = (index) => {
    if (index === 8) {
      setIsRipple(true);
      const newClicked = Array(9).fill(false);
      setClicked(newClicked);

      newClicked.forEach((_, i) => {
        setTimeout(() => {
          setClicked((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * 300);
      });
    } else {
      const newClicked = [...clicked];
      newClicked[index] = !newClicked[index];
      setClicked(newClicked);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="grid grid-cols-3 grid-rows-3 w-full max-w-xs h-auto aspect-square gap-2 border-2 border-black">
        {clicked.map((isClicked, index) => (
          <div
            key={index}
            className={`border border-black cursor-pointer transition-all duration-300 h-full w-full ${
              isRipple
                ? isClicked
                  ? "bg-orange-500"
                  : "bg-gray-300"
                : isClicked
                ? "bg-gradient-to-br from-green-400 to-green-700"
                : "bg-gradient-to-br from-gray-200 to-gray-400"
            }`}
            onClick={() => changeColor(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;