import fetchImages from "@/lib/fetchImages";
import { ImageResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

type Props = {
  topic?: string;
};
export default async function Gallery({ topic }: Props) {
  const url = !topic
    ? `https://api.pexels.com/v1/curated`
    : `https://api.pexels.com/v1/search?query=${topic}`;
  const images: ImageResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Foumd</h2>;
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px]">
      {images.photos.map((image) => (
        <ImgContainer key={image.id} photo={image} />
      ))}
    </section>
  );
}
