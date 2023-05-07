export default function Loading() {
  const buttons = Array(4).fill(
    <button key={Math.random()} className="button">
      <div className="bg-gray-200 h-8 w-full rounded-md animate-pulse" />
    </button>,
  );

  return (
    <main className={`bg-stone-900 min-h-screen flex flex-col p-14 justify-start items-center`}>
      <section className="relative aspect-video w-[800px]">
        <div className="bg-gray-700 h-300 w-300 rounded-md animate-pulse z-30" />
        <div
          className="bg-hows-that-pokemon absolute top-0 bottom-0 left-0 right-0 bg-contain bg-no-repeat
        rounded-md rounded-tl-xl rounded-tr-xl z-0"
        />
      </section>

      <section className="relative grid grid-cols-2 grid-rows-2 gap-3 mt-3 w-[800px]">
        {buttons.map((button) => button)}
      </section>
    </main>
  );
}
