import { useState } from "react";
import Button from "../utils/Button";

function Home() {
  const [number, setNumber] = useState(1);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value, name } = e.target;
    console.log(value);
  };
  return (
    <div className="bg-gray-200 flex flex-col p-4">
      <div className="bg-gray-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quia
        tempora a voluptate consequuntur explicabo aliquid autem sunt
        consectetur nobis. Illo commodi omnis tempore mollitia, nulla est fuga
        non possimus.
      </div>
      <p>Render count: {number}</p>
      <button
        name="btn1"
        onClick={(e) => handleClick(e)}
        className="py-2 px-4 bg-gray-500 text-white"
        value={1}
      >
        Click me
      </button>
      <Button setCount={setNumber} />
    </div>
  );
}

export default Home;
