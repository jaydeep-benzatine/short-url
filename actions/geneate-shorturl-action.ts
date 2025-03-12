"use server";

export const genrateShortUrlAction = async (prevState: any, fd: FormData) => {
  console.log("I am inside genrateShortUrlAction action");

  try {
    const longURL = fd.get("url");

    if (!longURL) throw new Error("Please enter URL to shorten It.");

    // TODO: generate short url here
    const shortURL = longURL;

    // await new Promise((resolve) => setTimeout(resolve, 4000));

    return { message: `New Short URL is created: ${shortURL}` };
  } catch (error) {
    return {
      message: `Unable to generate short url, Error: ${(error as Error).message}`,
    };
  }
};
