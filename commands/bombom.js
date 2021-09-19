

const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Bom Bom`)
        .setImage(`https://c.tenor.com/x4iTQXSHHFcAAAAM/chocolate-drizzle.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
        
}