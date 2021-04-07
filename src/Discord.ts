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

const str = await client.login(process.env['DISCORD_TOKEN']);
console.log(str);
