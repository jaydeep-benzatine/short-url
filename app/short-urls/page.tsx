import GenerateShortURLForm from "@/components/generate-short-url-form";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <section
        id="header"
        className="mt-5 flex h-56 items-center justify-center"
      >
        <h1 className="text-center text-4xl font-semibold">URL Shortner</h1>
      </section>

      <main className="w-96">
        <GenerateShortURLForm />
      </main>
    </div>
  );
}
