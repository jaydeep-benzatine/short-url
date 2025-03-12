import client from "@/lib/redis/client";

export default async function getAllShortUrls() {
  try {
    const keys = await client.keys("short-url:*");

    const urls = keys.map((it) => it.split("short-url:")[1]);

    return urls;
  } catch (error) {
    console.log("Error occur at getAllShortUrls");
    console.log(error);
    return [];
  }
}
