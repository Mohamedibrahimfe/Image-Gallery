import type { photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";
type Props = {
  photo: photo;
};
export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(150 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <div
      key={photo.id}
      className=" w-[250px] h-[250px] justify-self-center"
      style={{ gridRowEnd: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={galleryHeight}
            loading="lazy"
            sizes="250px"
            className="w-full h-full  rounded-xl transition duration-500 hover:scale-105 hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}
