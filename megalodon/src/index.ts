import generator from "megalodon";

const main = async () => {
  const client = generator(
    "mastodon",
    "https://fedibird.com",
    process.env.MASTODON_ACCESS_TOKEN
  );
  const timeline = await client.getPublicTimeline();
  timeline.data.forEach((status) => {
    console.log(status.id);
  });
};

main();
