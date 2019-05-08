const commando = require('discord.js-commando');
const discord = require('discord.js')
class StartAPatrolCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'partner',
            group: 'admin',
            memberName: 'partner',
            description: ''
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Partner!")
        .setDescription(`Thank you ${message.author} you are not a partner with Ace's hangout server`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setAuthor("Ace's bot")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StartAPatrolCommand
