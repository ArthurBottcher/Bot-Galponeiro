const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Que chatice isso kkkkkkk`)
        .setImage(`https://media.tenor.com/images/fe521a2430fb1eb4b1ecff76409d8110/tenor.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
}