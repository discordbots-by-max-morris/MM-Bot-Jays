const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class PartnerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'partner',
            group: 'moderation',
            memberName: 'partner',
            description: 'A user want to partner.',
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'What is your user?',
                    type: 'member'
                }
            ]
        });
    }
    
  async run(message, args) {
    const annChan = this.client.channels.get('575762162555944961');
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`The user: ${args.member} Just clocked in it wills show the time they clocked in at the bottom)
      .setColor('RANDOM')
      .setTimestamp();
    annChan.sendEmbed(embed);
    };
  };
