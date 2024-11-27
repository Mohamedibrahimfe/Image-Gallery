import Gallery from "@/app/components/Gallery";
type props = { params: { term: string } };

export function generateMetadata({ params: { term } }: props) {
  return {
    title: `${term} Images`,
  };
}

export default function SearchResults({ params: { term } }: props) {
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      <Gallery topic={term} />
    </section>
  );
}
