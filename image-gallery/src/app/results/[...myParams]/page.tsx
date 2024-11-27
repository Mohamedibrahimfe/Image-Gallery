import Gallery from "@/app/components/Gallery";
type props = {
  params: {
    term: string;
    myParams: string | undefined[];
  };
};

export function generateMetadata({ params: { myParams } }: props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return {
    title: `results for ${topic} page ${page}`,
  };
}

export default function SearchResults({ params: { myParams } }: props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      <Gallery topic={topic} page={page} />
    </section>
  );
}
