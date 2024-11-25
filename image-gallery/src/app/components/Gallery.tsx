import fetchImages from "@/lib/fetchImages";
import type { Image } from "@/models/Images";

export default async function Gallery() {
  const url = "https://api.pexels.com/vi/curated";
  const images: Image | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Foumd</h2>;
  return (
    <section>
      <ul>
        {images.images.map((image) => (
          <li key={image.id}>{image.image.large}</li>
        ))}
      </ul>
    </section>
  );
}
