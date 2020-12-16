import "babel-polyfill";
import pleroma from "../pleroma-api";

const config = {
  instance: "https://pleroma.io",
  accessToken: "your access token",
};

const main = async () => {
  const res = await pleroma.api.timelines.home({ config });
  console.log(res.data);
};

main();
