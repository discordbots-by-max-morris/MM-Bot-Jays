const { Command } = require('discord.js-commando');
const { oneLine } = require('common-tags');
const { RichEmbed } = require('discord.js');

module.exports = class AnnounceCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'announce',
      aliases: ['update', 'lann', 'sendupdate'],
      group: 'control',
      memberName: 'announce',
      description: 'Sends an announcemnt to #announcements in SERVER',
      details: oneLine`
		    This command sends an announcemnt to #announcements in SERVER
            Usage is restricted to bot owners.
			`,
      examples: ['announce'],
      args: [{
        key: 'toAnn',
        label: 'announce',
        prompt: 'What would you like to announce?',
        type: 'string',
        infinite: false
      }],
      guarded: true,
      ownerOnly: false
    });
  }

  async run(message, args) {
    const annChan = this.client.channels.get('574584977132355624');
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(args.toAnn)
      .setColor('0xFF0000')
      .setTimestamp();
    annChan.send('<@&574583652898439201>', { embed }).then(() => {
      message.reply('Announcement sent!');
    });
  }
};
