import getAllShortUrls from "@/backend/data-access/get-all-short-urls";

export default async function Page() {
  const result = await getAllShortUrls();

  return (
    <>
      <div className="mt-5 flex min-h-screen flex-col items-center gap-3">
        <p className="text-4xl font-semibold">Short URLs List</p>

        <ul>
          {result.map((it) => (
            <li key={`short-url-${it.shortId}`}>
              {it.shortId} - {it.value} - {it.counter}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
