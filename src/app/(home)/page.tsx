import { Exclusive, Hero, NewCollections, NewsLetter, Popular } from "./_components";

export default function Home() {
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
      <NewCollections />
      <NewsLetter />
    </main>
  );
}
