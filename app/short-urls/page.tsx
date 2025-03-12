import getAllShortUrls from "@/backend/data-access/get-all-short-urls";

export default async function Page() {
  const shortUrls = await getAllShortUrls();

  return (
    <>
      <div className="mt-5 flex min-h-screen flex-col items-center gap-3">
        <p className="text-4xl font-semibold">Short URLs List</p>

        <ul>
          {shortUrls.map((it) => (
            <li key={`short-url-${it}`}>{it}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
