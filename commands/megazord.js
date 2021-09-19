const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	// message.channel.send('Entra um no cu do outro e vira um megazord')
	const embed = await new Discord.MessageEmbed()
	    	.setColor('#f2eb24')
	    	.setTitle(`Entra um no cu do outro e depois vira um megazord`)
        	.setImage(`https://media.tenor.com/images/87c8fd4e54902f349717112265e2d613/tenor.gif`)
	    	.setTimestamp()
		await message.channel.send(embed)
        
}