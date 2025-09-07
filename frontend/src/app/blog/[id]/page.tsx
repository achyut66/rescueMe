"use client";

import React, {useEffect} from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Type for blog
type Blog = {
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
};

const blogs: Record<number, Blog> = {
  1: {
    title: "The Role of Helicopter Rescue in the Himalayas",
    author: "Sangeeta Thapa",
    date: "September 1, 2025",
    image: "/menu/heli1.jpeg",
    content: `
      <p>Helicopter rescue in the Himalayas is essential for rapid evacuation of injured climbers and trekkers. 
      These operations dramatically improve survival by providing access to medical facilities in remote regions.</p>
      <p>Highly trained pilots and paramedics coordinate to navigate extreme weather, high altitudes, and difficult terrain, 
      ensuring every rescue is performed safely and efficiently.</p>
      <p>Partnerships with local guides, the Nepal Army, and SAR teams ensure that operations are seamless, making mountain 
      expeditions safer for both tourists and local communities.</p>
    `,
  },
  2: {
    title: "Advanced Techniques in Mountain MedEvac",
    author: "Hari Neupane",
    date: "August 28, 2025",
    image: "/menu/heli2.jpeg",
    content: `
      <p>Mountain MedEvac requires specialized equipment and protocols to handle emergencies effectively. 
      Helicopters are equipped with oxygen and medical kits to stabilize patients during high-altitude transport.</p>
      <p>Rescue personnel are trained in altitude sickness, trauma, and hypothermia management, providing critical care 
      even in extreme conditions.</p>
      <p>Coordination with trekking agencies, local guides, and hospitals ensures patients reach appropriate medical facilities 
      quickly, improving survival and recovery rates.</p>
    `,
  },
  3: {
    title: "Challenges of Search and Rescue in Remote Areas",
    author: "Manohar Singh",
    date: "August 20, 2025",
    image: "/menu/heli.jpeg",
    content: `
      <p>SAR operations in the Himalayas face extreme challenges including unpredictable weather, steep terrain, and 
      limited communication. Teams must adapt quickly to locate missing climbers and trekkers.</p>
      <p>Use of helicopters, drones, and satellite tracking improves mission efficiency. On-site medical support stabilizes 
      injured individuals before evacuation.</p>
      <p>Collaboration with the Nepal Army, local guides, and insurance providers ensures safe, coordinated, and timely 
      operations that save many lives annually.</p>
    `,
  },
};

export default function BlogDetailPage() {
  useEffect(() => {
    document.title = "BaseCamp Trip | Blog | Readmore";
  }, []);
  const params = useParams();
  const id = Number(params.id);

  const blog = blogs[id];

  if (!blog) {
    return <p className="text-center py-24 text-xl">Blog not found.</p>;
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{blog.title}</h1>
        <p className="text-gray-500 mb-8">
          By <span className="font-semibold">{blog.author}</span> | {blog.date}
        </p>

        <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" loading="lazy" />
        </div>

        <div
          className="text-gray-700 text-lg leading-7 space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}
