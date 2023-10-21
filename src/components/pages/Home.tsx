import { useState } from "react";
import Button from "../utils/Button";

function Home() {
  const [number, setNumber] = useState(1);
  return (
    <div className="bg-gray-200 flex flex-col p-4">
      <div className="bg-gray-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quia
        tempora a voluptate consequuntur explicabo aliquid autem sunt
        consectetur nobis. Illo commodi omnis tempore mollitia, nulla est fuga
        non possimus.
      </div>
      <p>Render count: {number}</p>
      <Button setCount={setNumber} />
    </div>
  );
}

export default Home;
