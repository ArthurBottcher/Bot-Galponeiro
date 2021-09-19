const Discord = require("discord.js")
const axios = require('axios')


exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`O gordinho ta virando tomate`)
        .setImage(`https://c.tenor.com/RnRFadtmK1AAAAAM/tomato-spin.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
        
}