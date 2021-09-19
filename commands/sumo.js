const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`É hora do SUMOOOOOOOOOOO!`)
        .setImage(`https://media.tenor.com/images/ab4bce00dc472a3f000674d23b350bdd/tenor.gif`)
	    .setTimestamp()
	await message.channel.send(embed)
        
}