import type { ImageResults } from "@/models/Images";
function getPageNumber(url: string) {
  const { searchParams } = new URL(url);
  return searchParams.get("page");
}

export default function getPrevNextPage(images: ImageResults) {
  const prevPage = images.prevPage ? getPageNumber(images.prevPage) : null;
  let nextPage = images.nextPage ? getPageNumber(images.nextPage) : null;
  const totalPages =
    images.total_results % images.perPage
      ? Math.ceil(images.total_results / images.perPage)
      : images.total_results / images.perPage + 1;
  if (nextPage && parseInt(prevPage) + 5 < totalPages)
    nextPage = (parseInt(nextPage) + 5).toString();

  if (nextPage && parseInt(prevPage) >= 5) nextPage = null;
  return { prevPage, nextPage };
}
