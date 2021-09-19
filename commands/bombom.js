

const Discord = require('discord.js');

exports.run = async (client, message) => {
	message.delete();
	
	const embed = new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle('Bom Bom')
		.setImage('https://c.tenor.com/x4iTQXSHHFcAAAAM/chocolate-drizzle.gif')
		.setTimestamp();
	await message.channel.send(embed);
        
};