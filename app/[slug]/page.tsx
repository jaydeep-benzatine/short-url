import client from "@/lib/redis/client";
import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const result = await client.get(slug);

  if (!result) return <p>No URL is associated with this Short ID, want to create your own short URL.</p>

  return redirect(result);
}
