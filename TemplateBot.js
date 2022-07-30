const token = 'token string here'


// Imports
const Discord = require('discord.js');
const { EmbedBuilder, channelMention, PresenceUpdateStatus } = require('discord.js');
const avatar = 'bot profile picture (avatar) link here'

// Intents
const { Client, GatewayIntentBits, MessageType } = require('discord.js');
const bot = new Discord.Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildIntegrations ] });


// Prefix
const prefix = 'p!'

bot.once('ready', () => {
	bot.user.setActivity('activity');
	if (bot.user.avatarURL !== avatar) { bot.user.setAvatar(avatar); }
});

// onMessageSent
bot.on('messageCreate', (message) => { if (bot.user !== message.author) {

	// vars
	let user = message.author
	let avatar = message.author.displayAvatarURL()

	// commands
    if (message.content.startsWith(prefix) && bot !== message.author) {

        // p!test
	    if (message.content === prefix + 'test') {
	        message.reply('test successful')
	    }
    
        // p!help
	    else if (message.content === prefix + 'help') {
            message.reply({ embeds: [ helpEmbed(user, avatar) ]})
	    }

        // p!randomtext usage/help message
	    else {
            message.reply({ embeds: [ helpEmbed(user, avatar) ]})
	    }
  }
}});



// Embed(s)
const helpEmbed = (event_user, avatar_url) => {
    return new Discord.EmbedBuilder(event_user)
		.setColor(0x123456)
	    .setTitle('TuSKe is the best skript addon')
		//probably broken - gotta fix (title url) | .setURL('https://www.spigotmc.org/resources/tuske.25136/') |
	    .setDescription('Super Epic\nand cool\nDiscord.js\nbot :)\n\n**__Commands:__**\n```p!help\n- Sends this embed/message\n\np!anytext\n- Sends this embed/message\n\np!test\n- Sends the message "test successful"```')
		.addFields({ name: '\u200B', value: '\u200B' })
	    .setTimestamp()
	    .setFooter({ text: `Requested by: ${event_user.tag}   (${event_user.id})`, iconURL: avatar_url });
}


bot.login(token);
