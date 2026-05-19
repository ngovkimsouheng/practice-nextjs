/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
"use client";
import BlogComponents from "@/components/BlogComponents";
import React, { useEffect, useState } from "react";
import { blogType } from "@/lib/blog/blogType";
import { div } from "motion/react-client";
import BlogComponent from "@/components/BlogComponent";
import Link from "next/link";

export default function page() {
  // const blogs: blogType[] = [
  //   {
  //     profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
  //     name: "meow meow",
  //     position: "princess",
  //   },
  //   {
  //     profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
  //     name: "meow meow",
  //     position: "princess",
  //   },
  //   {
  //     profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
  //     name: "meow meow",
  //     position: "princess",
  //   },
  // ];

  const [blog, setBlog] = useState<any[]>([]);

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/posts");
      const data = await res.json();

      setBlog(data?.posts);
    }

    getAllBlog();
  }, []);
  return (
    <div className=" mt-8 grid grid-cols-4 mx-auto container max-w-7xl gap-8">
      {/* <div className="container mx-auto grid grid-cols-3 gap-4">
        {blogs?.map(({ profile, name, position }, _) => (
          <BlogComponents
            key={_}
            profile={profile}
            name={name}
            position={position}
          />
        ))}
      </div> */}
     
      {blog?.map(({ id, title, body }) => (
        <BlogComponent key={id} title={title} body={body} id={id} />
      ))}
    </div>
  );
}
