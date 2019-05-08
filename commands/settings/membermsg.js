const { Command } = require('discord.js-commando');

module.exports = class MemberMsgCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'member-message',
            aliases: ['membermsg', 'member-msg'],
            group: 'settings',
            memberName: 'member-message',
            description: 'Sets the message for either join/leave logs to use.',
            details: '**Placeholders:** <user>: Username, <server>: Server Name, <mention>: A Mention of the User',
            guildOnly: true,
            args: [
                {
                    key: 'type',
                    prompt: 'Which message would you like to change? Please enter either `joinMsg` or `leaveMsg`.',
                    type: 'string',
                    validate: type => {
                        if (['joinMsg', 'leaveMsg'].includes(type)) return true;
                        return 'Please enter either `joinMsg` or `leaveMsg`.';
                    }
                },
                {
                    key: 'message',
                    prompt: 'What should be sent to the channel? Use <user>, <server>, and <mention> as placeholders.',
                    type: 'string',
                    validate: message => {
                        if (message.length < 300) return true;
                        return 'Invalid Message. Message must be under 150 characters.';
                    }
                }
            ]
        });
    }

    hasPermission(msg) {
        return msg.member.hasPermission('ADMINISTRATOR');
    }

    run(msg, args) {
        const { type, message } = args;
        if (type === 'joinMsg') {
            msg.guild.settings.set('joinMsg', message);
            return msg.say(`Join Message set to "${message}".`);
        } else if (type === 'leaveMsg') {
            msg.guild.settings.set('leaveMsg', message);
            return msg.say(`Leave Message set to "${message}".`);
        }
    }
};
