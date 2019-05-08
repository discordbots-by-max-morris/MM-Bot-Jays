const commando = require('discord.js-commando');
const discord = require('discord.js')
module.exports = class WarnCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            group: 'moderation',
            memberName: 'warn',
            description: 'Warns a user and logs the warn to the mod logs.',
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

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Partner!")
        .setDescription(`Thank you ${member} you ***are*** a partner with Ace's hangout server`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor("Ace's bot")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StartAPatrolCommand
