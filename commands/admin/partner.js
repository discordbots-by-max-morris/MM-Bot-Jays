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
                    key: 'user',
                    prompt: 'What member do you want to warn?',
                    type: 'user'
                }
            ]
        });
    }

    async run(message, user)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Partner!")
        .setDescription(`Thank you ${user} you ***are*** a partner with Ace's hangout server`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor("Ace's bot")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StartAPatrolCommand
