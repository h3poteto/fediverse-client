import { Peertube } from "peertube-client";

//------------------------------
// To resolve fetch in node js
//------------------------------
import Global = NodeJS.Global;
export interface GlobalWithCognitoFix extends Global {
  fetch: any;
}
declare const global: GlobalWithCognitoFix;
global.fetch = require("node-fetch").default;
//------------------------------

declare var process: {
  env: {
    PEERTUBE_USER: string;
    PEERTUBE_PASSWORD: string;
  };
};

const peertube = new Peertube({
  instance: "peertube.fr",
  user: process.env.PEERTUBE_USER,
  password: process.env.PEERTUBE_PASSWORD,
});

const main = async () => {
  const videos = await peertube.getVideos();
  videos.data.map((v) => console.log(v));
};

main();
