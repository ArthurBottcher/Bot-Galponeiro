const Discord = require('discord.js');

exports.run = async (client, message, ) => {
	message.delete();
	const embed = await new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle('Traz a insulina que o gordo ta maluco!')
		.setImage('https://media1.tenor.com/images/637d9d662a61c44870ef57eac0bd96a8/tenor.gif?itemid=13945895')
		.setTimestamp();
	await message.channel.send(embed);
};