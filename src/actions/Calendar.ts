import { Action } from '../domain/Action';
import Asset from '../env/Asset';
import { TextChannel } from 'discord.js';
import _ from 'lodash';

export default class Calendar extends Action {
  async run(): Promise<void> {
    const channel = (await this.client.channels.fetch(Asset.channels.agenda)) as TextChannel;
    if (!channel) return;
    if (channel.isText()) {
      const types = ['Accepted', 'Declined', 'Tentative'];
      const message = await channel.messages
        .fetch({ limit: 1 })
        .then((messages) => messages.first());

      const fields = _.first(message?.embeds)
        ?.fields.filter((value) => {
          return types.some((value1) => value.name.includes(value1));
        })
        .map((obj) => obj.value);
      console.log(fields);
    }
  }
}
