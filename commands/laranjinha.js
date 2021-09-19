
const Discord = require('discord.js');

exports.run = async (client, message, ) => {
	message.delete();
	
	const embed = await new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle('Oh obrigado, danke schön')
		.setImage('https://c.tenor.com/PqQxvFUiPt4AAAAd/happy-orange-annoying-orange.gif')
		.setTimestamp();
	await message.channel.send(embed);
        
};