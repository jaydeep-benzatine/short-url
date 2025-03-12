"use server";

import client from "@/lib/redis/client";
import { nanoid } from "nanoid";

export type IShortURLResponseType = {
  success: boolean;
  data?: string;
  error?: string;
};

export const genrateShortUrlAction = async (prevState: any, fd: FormData) => {
  try {
    const longURL = fd.get("url") as string;

    if (!longURL) throw new Error("Please enter URL to shorten It.");

    // TODO: generate short url here
    const shortId = nanoid(6);
    const key = `short-url:${shortId}`;
    await client.set(key, longURL);

    return { success: true, data: shortId };
  } catch (error) {
    console.log("Error generating short url");
    console.log(error);

    if (error instanceof Error) {
      return {
        success: false,
        error: (error as Error).message,
      };
    }

    return {
      success: false,
      error: "Unable to geneate short URL",
    };
  }
};
