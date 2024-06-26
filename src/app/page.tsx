import { Hero } from "./_components";

export default function Home() {
  return (
    <main
      className="
        min-h-[400px]
        sm:min-h-[90vh]
        flex
        flex-col
      "
    >
      <Hero />
    </main>
  );
}
