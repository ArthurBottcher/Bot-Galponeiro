const Discord = require('discord.js')
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle(`Cala a boca Felipe!!! Gordo`)
		.setImage(`https://media1.tenor.com/images/46390164746510e4cf97c198bbf875fb/tenor.gif?itemid=13364910`)
		.setTimestamp()
	await message.channel.send(embed)
}