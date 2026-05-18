import BlogComponents from "@/components/BlogComponents";
import React from "react";
import { blogType } from "@/lib/blog/blogType";
export default function page() {
  const blogs: blogType[] = [
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
    },
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
    },
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
    },
  ];

  return (
    <div>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {blogs?.map(({ profile, name, position }, _) => (
          <BlogComponents
            key={_}
            profile={profile}
            name={name}
            position={position}
          />
        ))}
      </div>
    </div>
  );
}
