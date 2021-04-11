import { TextChannel } from 'discord.js';
import Asset from '../env/Asset';
import Utils from '../util/Utils';
import { Action } from '../domain/Action';

export default class Greeting extends Action {
  async run(): Promise<void> {
    this.client.on('guildMemberAdd', async (member) => {
      const channel = member.guild.channels.cache.find(
        (ch) => ch.id === Asset.channels.boas_vindas,
      );
      if (!channel) return;
      if (channel.isText()) {
        await (<TextChannel>channel).send(Utils.printf(Asset.greeting.message, member.displayName));
      }
    });
  }
}
