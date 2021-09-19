const Discord = require('discord.js')

exports.run = async (client, message, args) => {
	message.delete()
	let user = message.mentions.users.first() || client.users.cache.get(args[0])
	if (!user) return message.reply('lembre-se de mencionar um usuário válido!')

	const embed = new Discord.MessageEmbed()
		.setTitle('Pato')
		.setColor('#f2eb24')
		.setDescription(`${user} você é o pato do ${message.author} `)
		.setImage("https://media.tenor.com/images/7f5c02ec315f28e0f1fb956d8a619421/tenor.gif")
		.setTimestamp()
		.setFooter('Qua-qua qua-qua')
	await message.channel.send(embed)
}