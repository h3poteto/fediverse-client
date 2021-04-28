const { login } = require("masto");

const main = async () => {
  const client = await login({
    uri: "https://fedibird.com",
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  });

  for await (const statuses of client.timelines.home) {
    Object.keys(statuses).forEach((key) => {
      console.log(statuses[key].id);
    });
  }
};

main();
