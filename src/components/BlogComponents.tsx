import React from "react";
import Image from "next/image";
import { blogType } from "@/lib/blog/blogType";
export default function BlogComponents(props: blogType) {
  return (
    <div className=" p-8 ">
      <img
        className=" rounded-2xl"
        alt="cat"
        src={props.profile}
        width={500}
        height={500}
      />

      <h1 className="text-3xl">{props.name}</h1>
      <h2>{props.position}</h2>
    </div>
  );
}
