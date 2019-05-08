const commando = require('discord.js-commando');
const discord = require('discord.js');

class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'partner_test',
            group: 'admin',
            memberName: 'partner_test',
            description: 'Shows the help'
        });
    }

    async run(message, args) {
        let msgarray = message.content.split(" ");
        let cmd = msgarray[0].toLowerCase();
        let ARGS = msgarray.slice(1);

        createMessage(ARGS[0]);


        function createMessage(string, bookmessage) {

            switch (string) {

                case 'profile' : {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487")
                        .addField('info', 'info about the bot', true)
                        .addField('guillist', 'shows all the guilds I am in\n Guil stands for server for people who are dumb a do not know', true)
                        .addField('invite', 'sends invite shit', true)
                        .addField('helpmenu', 'if your that dumb this is the fucking help menu', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                default: {
                    var help = new discord.RichEmbed()                 // Help main page.
                        .setTitle('Hello, I heard you wanted to partner?')
                        .setDescription("Did you know that if you type: ``Hello``, \nI will reply back? Just try it out. \n\n**Hey mate!, this is my help menu's.**")
                        .setColor("RANDOM")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
            }
            if (bookmessage !== undefined) {
                bookmessage.edit(help).then(result => reactions(result));
            } else {
                message.channel.send(help).then(async function (result) {

                    reactions(result);

                    await result.react("\:arrow_left:");
                    await result.react("\:arrow_forward: ");
                    await result.react("❌");
                })
            }

            function reactions(result) {
                const filter = (reaction, user) => {
                    return ["\:arrow_left:", "\:arrow_forward:",  "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                result.awaitReactions(filter, {max: 1, maxEmojis: 1})
                    .then(collected => {
                        const reaction = collected.first();
                        reaction.remove(message.author.id);

                        switch (reaction.emoji.name) {
                            case ("\:arrow_left:"): {
                                createMessage(`profile`, result);
                            }
                                break;
                            case ("\:arrow_forward: "): {
                                createMessage(`games`, result);
                            }
                                break;
                            case ("❌"): {
                                message.channel.send("You have now exit my help menu.")
                            }

                        }
                    })
            }
        }

    }
}

module.exports = HelpCommand;
