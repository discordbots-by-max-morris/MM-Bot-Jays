const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class addRoleCommand extends Command {
    constructor(client) {
        super(client, {
            name:"promote",
            aliases: ["add-role", "arole"],
            group: 'admin',
            memberName: 'promote',
            description: 'Adds a role to a user.',
            args: [
                {
                    type:"user",
                    prompt:"Which user would you like to add the role to?",
                    key:"user",
                },
                {
                    type:"role",
                    prompt:"Which role would you like to add?",
                    key:"role"
                }
            ],
             clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
        })
    }
    run(msg, { user, role }) {

        msg.guild.member(user).addRole(role)
        msg.say('Successfully added ' + role + ' to ' + user)
 
    
    }
}
