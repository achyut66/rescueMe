"use client";

import React,{useEffect} from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "The Role of Helicopter Rescue in the Himalayas",
    author: "Sangeeta Thapa",
    date: "September 1, 2025",
    image: "/menu/heli1.jpeg",
    excerpt: "Helicopter rescue has become a critical lifeline in the high-altitude regions of Nepal, allowing rapid evacuation of injured climbers and trekkers. These operations save lives by providing quick access to medical care in areas otherwise unreachable by foot or ground vehicles.",
    // link: "/blog/readmore-blog-{id}",
  },
  {
    id: 2,
    title: "Advanced Techniques in Mountain MedEvac",
    author: "Hari Neupane",
    date: "August 28, 2025",
    image: "/menu/heli2.jpeg",
    excerpt: "Medical evacuation in the mountains requires specialized equipment and trained personnel. Helicopters equipped with oxygen support and medical kits ensure that high-altitude emergencies are managed effectively, even in extreme weather conditions.",
    // link: "/blog/readmore-blog-{id}",
  },
  {
    id: 3,
    title: "Challenges of Search and Rescue in Remote Areas",
    author: "Manohar Singh",
    date: "August 20, 2025",
    image: "/menu/heli.jpeg",
    excerpt: "Conducting search and rescue in the Himalayas presents unique challenges, including unpredictable weather, treacherous terrain, and limited communication. Helicopter operations, combined with local guides and SAR teams, provide critical support to overcome these obstacles.",
    // link: "/blog/readmore-blog-{id}",
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "BaseCamp Trip | Blog";
  }, []);
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-gray-900">
          Heli Rescue Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  By <span className="font-semibold">{blog.author}</span> | {blog.date}
                </p>
                <p className="text-gray-700 flex-1">{blog.excerpt}</p>
                
                {/* Read More Button */}
                <a
                  href={`/blog/${blog.id}`}
                  className="mt-6 inline-block text-center bg-gray-50 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Read More
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
