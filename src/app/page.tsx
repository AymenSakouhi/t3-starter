import Image from "next/image";
import { db } from "~/server/db";
const mockUrls = [
  "https://utfs.io/f/22e75a24-a61a-415f-8029-c4c1c355541f-vmbdch.jpg",
  "https://utfs.io/f/22f416b8-aa30-4269-96e7-a30fe3b999e2-vmbdcg.jpg",
  "https://utfs.io/f/0c228cd0-936b-49be-be93-52420aaab94f-vmbdcf.jpg",
  "https://utfs.io/f/22a4bc39-3422-44e8-a341-86b817ef986e-vmbdce.jpg",
  "https://utfs.io/f/f97d8965-d3ae-4ec3-b597-42deaa884f92-vmbdcd.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt={`random-image-${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
