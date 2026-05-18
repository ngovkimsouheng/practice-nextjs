"use client";
import { useState } from "react";

export default function AddToCardComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto mt-10 my shadow-sm w-[500px] border flex flex-col gap-10 items-center  justify-center py-20 rounded-2xl ">
      <h1 className="text-3xl font-bold"> Card: {count} </h1>
      <button
        className=" cursor-pointer bg-blue-50 px-4 py-1.5 border rounded"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Add to Card
      </button>
    </div>
  );
}
