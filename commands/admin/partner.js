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
                    prompt: 'What is the user who wants to partner?',
                    type: 'member'
                },
                {
                    key: 'string',
                    prompt: 'What is the reason?',
                    type: 'string'
                }
            ]
        });
    }
    
  async run(message, args) {
    const annChan = this.client.channels.get('553482011218804736');
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`The user: ${args.member} Wants to partner!\n With the reason ${args.string}`)
      .setColor('RANDOM')
      .setTimestamp();
    annChan.sendEmbed(embed);
    };
  };
