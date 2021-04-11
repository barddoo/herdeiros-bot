import { Client } from 'discord.js';

export abstract class Action {
  protected client: Client;

  constructor(discord: Client) {
    this.client = discord;
  }

  abstract run(): Promise<void>;
}
