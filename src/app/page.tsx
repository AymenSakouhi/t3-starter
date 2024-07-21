import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/22e75a24-a61a-415f-8029-c4c1c355541f-vmbdch.jpg",
  "https://utfs.io/f/22f416b8-aa30-4269-96e7-a30fe3b999e2-vmbdcg.jpg",
  "https://utfs.io/f/0c228cd0-936b-49be-be93-52420aaab94f-vmbdcf.jpg",
  "https://utfs.io/f/22a4bc39-3422-44e8-a341-86b817ef986e-vmbdce.jpg",
  "https://utfs.io/f/f97d8965-d3ae-4ec3-b597-42deaa884f92-vmbdcd.jpg",
];

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt={`random-image-${image.id}`} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
