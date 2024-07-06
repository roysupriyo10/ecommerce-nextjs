import { cleanPageParameter } from "@/utils";
import {
  Exclusive,
  Hero,
  NewCollections,
  NewsLetter,
  Popular,
} from "./_components";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const cleanedPageParam = cleanPageParameter(searchParams.page);

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
      <NewCollections page={cleanedPageParam} />
      <NewsLetter />
    </main>
  );
}
