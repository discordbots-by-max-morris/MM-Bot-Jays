const commando = require('discord.js-commando');
const path = require('path');
const discord = require('discord.js');
const sql = require('sqlite');
const client = new commando.CommandoClient({
  owner: '359835581456580618', // Your ID here.
  commandPrefix: 'A!', // The prefix of your bot.
  unknownCommandResponse: true, // Set this to true if you want to send a message when a user uses the prefix not followed by a command
});

client
	.on('error', console.error)
	.on('warn', console.warn)
	.on('debug', console.log)
	.on('ready', () => {
		console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	})
	.on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })
	.on('commandError', (cmd, err) => {
		if(err instanceof commando.FriendlyError) return;
		console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
})
	.on('commandBlocked', (msg, reason) => {
		console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
	})
	.on('commandPrefixChange', (guild, prefix) => {
		console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('commandStatusChange', (guild, command, enabled) => {
		console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('groupStatusChange', (guild, group, enabled) => {
		console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	});

client.setProvider(
	sql.open(path.join(__dirname, 'database.sqlite3')).then(db => new commando.SQLiteProvider(db))
).catch(console.error);

// const defclient = new Discord.Client();
const chalk = require('chalk');
const error = chalk.bold.red;
const warn = chalk.keyword('orange');
const debug = chalk.cyan;
const { oneLine } = require('common-tags');
const ms = require('ms');
const dbots = require('superagent');
const request = require('request');
const { RichEmbed } = require('discord.js');
const fs = require('fs');
const os = require('os');
const snekfetch = require('snekfetch')


client.registry
	.registerDefaultTypes()
	.registerGroups([
	['general', 'general'],
    ['misc', 'Miscellaneous'],
    ['support', 'Support'],
    ['control', 'Bot Owners Only'],
    ['fun', 'Fun'],
    ['games', 'Games'],
    ['quote', 'Quote'],
    ['economy', 'Economy'],
    ['search', 'search'],
    ['moderation', 'Moderation'],
    ['team', 'Team'],
    ['random', 'Random'],
    ['admin', 'Admin'],
    ['music', 'Music'],
    ['simple', 'simple'],
    ['util', 'util'],
    ['misc', 'Misc'],
    ['help', 'help'],
    ['settings', 'Settings'],
    ['avatar-edit', 'avatar-edit'],
    ['response', 'response']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
        help: false,
    })
	.registerCommandsIn(path.join(__dirname, 'commands'));



  global.currentTeamMembers = [];
  global.servers = {};

  client.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
    if(message.content == 'Join')
    {
            message.member.send("Welcome to the server, I hope you have fun but rember read the rules!!!");
    }
    else if(message.content === "What's the current team?")
    {
        var teamInfo = new discord.RichEmbed()
            .setTitle("The current team mebers are:")
            .setColor("#fa00ff")
            .setThumbnail(message.author.avatarURL)
        for(var i = 0; i < currentTeamMembers.length; i++)
        {
            teamInfo.addField("Member" + (i+1).toString(),currentTeamMembers[i].username)
        }
        message.channel.send(teamInfo);
    }
});

client.on('message', function(message){
    if(message.content == 'Fine, how about you?')
    {
        message.reply('I am doing great!')
    }
});

client.on('message', message => {
	if (message.content === '!react-await') {
		message.react('👍').then(() => message.react('👎'));

		const filter = (reaction, user) => {
			return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
		};

		message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '👍') {
					message.reply('you reacted with a thumbs up.');
				} else {
					message.reply('you reacted with a thumbs down.');
				}
			})
			.catch(collected => {
				console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
				message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
			});
	}
});



client.login(process.env.BOT_TOKEN)
