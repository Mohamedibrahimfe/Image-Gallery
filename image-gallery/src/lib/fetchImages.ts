import type { Images } from "@/models/Images";
import { imageSchemaWithPage } from "@/models/Images";
import env from "./env";
export default async function fetchImages(
  url: string
): Promise<Images | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });
    if (!res.ok) {
      throw new Error("fetch images error!\n");
    }
    const images: Images = await res.json();
    console.log(images);

    const parsedData = imageSchemaWithPage.parse(Image);
    if ((parsedData.total_results = 0)) return undefined;
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
