const Discord = require('discord.js');

exports.run = async (client, message, ) => {
	message.delete();
	const embed = await new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle('O unico defeito do Bruno Mars é não ser o The Weekend!')
		.setImage('https://media.tenor.com/images/2c7fbae1c9dad811382be151a0a74d59/tenor.gif')
		.setTimestamp();
	await message.channel.send(embed);
};