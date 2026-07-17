
import { useState } from "react";

function Display({ number }) {
  return <p>Current number: {number}</p>;
}

function IncrementButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

function Parent1() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Display number={number} />
      <IncrementButton onIncrement={() => setNumber(number + 1)} />
    </div>
  );
}

export default Parent1;