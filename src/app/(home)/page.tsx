import {
  Exclusive,
  Hero,
  NewCollections,
  NewsLetter,
  Popular,
} from "./_components";

export default function Home({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {
  console.log(searchParams);

  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
      "
    >
      <Hero />
      <Popular />
      <Exclusive />
      <NewCollections
        page={searchParams.page}
      />
      <NewsLetter />
    </main>
  );
}
