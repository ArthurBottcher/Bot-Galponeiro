const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Olokinho meu`)
        .setImage(`https://media1.tenor.com/images/6ed3b39f8b0e50761fb483a40b71a014/tenor.gif?itemid=5604073`)
	    .setTimestamp()
	await message.channel.send(embed)      
}