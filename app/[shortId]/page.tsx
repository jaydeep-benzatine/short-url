import getUrlById from "@/backend/data-access/get-url-by-id";
import Link from "next/link";

type PageProps = {
  params: Promise<{ shortId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { shortId } = await params;

  const result = await getUrlById(shortId);

  console.log("result", result);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-4xl">No URL Found</p>
        <Link
          href="/"
          className="mt-5 cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-white"
          prefetch
        >
          Go Back
        </Link>
      </div>
    </>
  );
}
