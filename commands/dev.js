const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Eu tbm sou desenvolvedor cara 🤩`)
        .setImage(`https://media.tenor.com/images/41f5553fa71ec4eab791042ff175c6f4/tenor.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
}