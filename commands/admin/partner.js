const commando = require('discord.js-commando');
const discord = require('discord.js')
class StartAPatrolCommand extends commando.Command
{
    constructor(client) {
        super(client, {
            name: 'partner',
            group: 'moderation',
            memberName: 'partner',
            description: '',
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'What member do you want to warn?',
                    type: 'member'
                }
            ]
        });
    }

    async run(message, member)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Partner!")
        .setDescription(`Thank you ${member.user} you ***are*** a partner with Ace's hangout server`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor("Ace's bot")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StartAPatrolCommand
