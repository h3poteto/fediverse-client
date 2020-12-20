import { App, AuthSession } from "corekey";

const main = async () => {
  const app = await App.create(
    "misskey.io",
    "fediverse-client",
    "description",
    ["read:notes"]
  );
  const session = await AuthSession.generate(app);
  console.log("open in your browser: ", session.url);
  const account = await session.waitForAuth();

  const res = await account.request("notes", {});
  console.log(res);
};

main();
