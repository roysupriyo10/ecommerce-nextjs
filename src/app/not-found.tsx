export default function NotFound() {
  return (
    <main
      className="
        h-[calc(100vh_-_19.5rem)]
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <h4
        className="
          text-7xl
          font-semibold
          text-red-800
        "
      >
        404
      </h4>
      <p>Whatever you were searching for was not found</p>
    </main>
  );
}
