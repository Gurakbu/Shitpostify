import { Client, Intents } from "discord.js";
import { CLIENT_TOKEN } from "./config.json";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.once("ready", () => {
  console.log("Ready to shitpost");
});

client.login(CLIENT_TOKEN);
