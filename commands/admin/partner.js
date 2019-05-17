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
                },
                {
                    key: 'memberbot',
                    prompt: 'What is the member count, bot count!',
                    type: 'string'
                },
                {
                    key: 'server',
                    prompt: 'What is the the server?',
                    type: 'string'
                },
                {
                    key: 'added',
                    prompt: 'What is the anything else you want to add?',
                    type: 'string'
                }
            ]
        });
    }
    
  async run(message, args) {
    const annChan = this.client.channels.get('553482011218804736');
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`The user: ${args.member} Wants to partner!`)
      .addField('The total members and bots are:', `${args.memberbot} that is the total member and bot count!`)
      .addField('The server link:', `${args.server} that is the server!`)
      .addField('Any other added info:',`${args.added}\n That is all the add info!`)
      .setColor('RANDOM')
      .setTimestamp();
    annChan.sendEmbed(embed);
    };
  };
