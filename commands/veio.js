
const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Veio comunista`)
        .setImage(`https://c.tenor.com/J62CI_FeX34AAAAM/heart-love.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
        
}