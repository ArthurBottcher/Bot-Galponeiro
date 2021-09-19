
const Discord = require('discord.js');

exports.run = async (client, message, ) => {
	message.delete();
	const embed = await new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle('O Rufus não é o problema!')
		.setImage('https://tenor.com/view/kim-possible-rufus-tv-show-surf-gif-5253008')
		.setTimestamp();
	await message.channel.send(embed);
};