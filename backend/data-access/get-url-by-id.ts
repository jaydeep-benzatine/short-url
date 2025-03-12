import client from "@/lib/redis/client";
import { redirect } from "next/navigation";

export default async function getUrlById(shortId: string) {
  try {
    const result = await client.get(`short-url:${shortId}`);

    if (!result) return null;

    await client.incr(`short-url-counter:${shortId}`);

    return redirect(result);
  } catch (error) {
    console.log("Error in getUrlById");
    console.log(error);

    return redirect("/?reason=error");
  }
}
