import client from "@/lib/redis/client";

export default async function getAllShortUrls() {
  try {
    const keys = await client.keys("short-url:*");
    const values = [];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      const shortId = key.split("short-url:")[1];
      const value = await client.get(key);
      const counter = await client.get(`short-url-counter:${shortId}`);

      values.push({ shortId: shortId, value, counter: counter ?? 0 });
    }

    // const urls = keys.map((it) => it.split("short-url:")[1]);

    return values;
  } catch (error) {
    console.log("Error occur at getAllShortUrls");
    console.log(error);
    return [];
  }
}
