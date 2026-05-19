import React from "react";

interface DetailBlog {
  title: string;
  body: string;
  tags: string[];
  views: number;
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export default function DetailBlogPageComponent({
  title,
  body,
  tags,
  views,
  userId,
  reactions: { likes, dislikes },
}: DetailBlog) {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

        <p className="text-gray-600 mb-5">{body}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
          <span> {likes} Likes</span>
          <span> {dislikes} Dislikes</span>
          <span> {views} Views</span>
        </div>

        <div className="mt-4 text-right text-xs text-gray-400">
          User ID: {userId}
        </div>
      </div>
    </div>
  );
}
