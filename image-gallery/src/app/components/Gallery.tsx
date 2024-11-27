import fetchImages from "@/lib/fetchImages";
import { ImageResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import getPrevNextPage from "@/lib/getPrevNextPage";
import Footer from "./Footer";
type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
export default async function Gallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page)
    url = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
  else if (topic === "curated" && page) {
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&per_page=15&page=${page}`;
  }

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images || images.perPage === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Foumd</h2>;
  const { prevPage, nextPage } = getPrevNextPage(images);
  const footerProps = { prevPage, nextPage, topic, page };
  return (
    <>
      <section className="px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px]">
        {images.photos.map((image) => (
          <ImgContainer key={image.id} photo={image} />
        ))}
      </section>
      <Footer {...footerProps} />
    </>
  );
}
