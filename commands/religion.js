

const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`A nossa religião é essa`)
		.setFooter('#somosTodosOgros')
		.setDescription('o Sherekismo')
        .setImage(`https://cdn.discordapp.com/attachments/850843765451259927/872164406157516910/3xxk1jayqom61.png`)
	    .setTimestamp()
	await message.channel.send(embed)
        
}