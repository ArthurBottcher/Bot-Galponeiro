
const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`O Rufus não é o problema!`)
        .setImage(`https://tenor.com/view/kim-possible-rufus-tv-show-surf-gif-5253008`)
	    .setTimestamp()
	await message.channel.send(embed)
}