import { Client } from 'discord.js';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.content === 'ping') {
    await msg.reply('pong');
  }
});

const str = await client.login(
  'ODI5MTgxMDc5MjE4NDIxNzYw.YG0ZDg.Gk_z2pal_1Owhl0yIDR3vwNzZyY',
);
console.log(str);
