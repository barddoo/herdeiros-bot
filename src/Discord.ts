import { Client } from 'discord.js';
import { config } from 'dotenv';
import Greeting from './actions/Greeting';
import Calendar from './actions/Calendar';
import Envs from './env/Envs';

const actions = [Calendar, Greeting];

config({ debug: true });

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('message', async (msg) => {
  console.log(msg.toJSON().toString());
  if (msg.content === 'ping') {
    await msg.reply('pong');
  }
});

(async () => {
  const str = await client.login(Envs.discord.token);
  console.log(str);

  for (const action of actions) {
    await new action(client).run();
  }
})();
