import Redis from "ioredis";

const client = new Redis(process.env.UPSTASH_REDIS_URL!);

client.on("error", (error) => {
  console.error("Redis Connection Error");
  console.log(error.message);
});

export default client;
