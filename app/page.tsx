import GenerateShortURLForm from "@/components/generate-short-url-form";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <section
        id="header"
        className="mt-5 flex flex-col gap-2 h-56 items-center justify-center"
      >
        <h1 className="text-center text-5xl font-semibold">URL Shortner</h1>
        <p>generate short version of your long url</p>
      </section>

      <main className="w-xl">
        <GenerateShortURLForm />
      </main>
    </div>
  );
}
