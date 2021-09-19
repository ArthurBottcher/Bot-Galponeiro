const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Hoje é sexta-feiraa`)
        .setImage(`https://media.tenor.com/images/3b609475f0120fef583a3a188c7fe506/tenor.gif`)
	    .setTimestamp()
	await message.channel.send(embed)  
}