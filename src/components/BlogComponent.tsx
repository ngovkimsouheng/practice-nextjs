import Link from "next/link";
import React from "react";

interface BlogType {
  id: number;
  title: string;
  body: string;
}
export default function BlogComponent({ id, title, body }: BlogType) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="p-6  shadow-sm cursor-pointer hover:ring-1 hover:ring-blue-500 border max-w-7xl mx-auto rounded-lg">
        <h1 className="text-2xl text-shadow-blue-700 line-clamp-2 font-bold">{title}</h1>
        <br />
        <p className="text-[20px] text-gray-600 line-clamp-3">{body}</p>
      </div>
    </Link>
  );
}
