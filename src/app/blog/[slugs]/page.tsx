"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DetailBlogPageComponent from "@/components/DetailBlogPageComponent";
import Link from "next/link";

type BlogDetail = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
};

export default function BlogSlug() {
  const params = useParams();
  const slugs = params.slugs;

  const [post, setPost] = useState<BlogDetail[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const slug = Array.isArray(slugs) ? slugs[0] : slugs;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${slug}`,
      );
      const data = await res.json();
      setPost([data]);
    };
      fetchPost();
  }, [slugs]);

  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      <Link href={`/blog`}> Go back</Link>
      {post.map((item) => (
        <DetailBlogPageComponent
          key={item.id}
          title={item.title}
          body={item.body}
          tags={item.tags}
          views={item.views}
          userId={item.userId}
          reactions={item.reactions}
        />
      ))}
    </div>
  );
}
