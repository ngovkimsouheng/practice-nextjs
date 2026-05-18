import { cardType } from "@/lib/blog/cardType";
import React from "react";

export default function Card({ image, title, description, price }: cardType) {
  return (
    <div
      className="
      border shadow-xs
group
bg-white
rounded-3xl
overflow-hidden

transition-all
duration-500
hover:-translate-y-2
border
border-gray-100
flex
flex-col
"
    >
      <div className="overflow-hidden shadow-sm">
        <img
          className="
      w-[350px]
      h-40
      object-cover
      transition-transform
      duration-500
      group-hover:scale-110
      "
          src={image}
          alt={title}
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        <p className="text-gray-500 text-sm leading-6 flex-1">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">${price}</span>

          <button
            className="
      px-5
      py-2
      rounded-full
      bg-green-600
      text-white
      font-medium
      hover:bg-green-700
      transition
      "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
