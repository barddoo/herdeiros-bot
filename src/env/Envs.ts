const { env } = process;
export = Object.freeze({
  discord: {
    token: env['DISCORD_TOKEN'],
  },
});
