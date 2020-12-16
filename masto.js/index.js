const masto = require("./node_modules/masto");

const main = async () => {
  const client = await masto.Masto.login({
    uri: "https://fedibird.com",
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  });

  const timeline = await client.fetchHomeTimeline();
  for await (const statuses of timeline) {
    Object.keys(statuses).forEach((key) => {
      console.log(statuses[key].id);
    });
  }
};

main();
