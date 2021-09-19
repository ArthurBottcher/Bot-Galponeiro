const Discord = require('discord.js')
const axios = require('axios')
const {getAsciiImage} = require('get-ascii-image')

const config = {
	maxWidth:100,
	maxHeight:300
}
exports.run = async (client, message, args) => {
	// message.delete()
	let urlImage  = args.join(' ')
	if (!urlImage) return message.reply('lembre-se de colocar uma url')

	if(urlImage != undefined){
		getAsciiImage(urlImage,config)
	.then(ascii=>{
		message.channel.send(ascii)
	})
		// let avatar = message.author.displayAvatarURL({format: 'png'})
		// const embed = new Discord.MessageEmbed()
	    // 	.setColor('#f2eb24')
	    // 	.setDescription(`Seu gif: `)
        // 	.setImage(`${urlImage}`)
	    // 	.setTimestamp()
        // 	.setAuthor(message.author.tag, avatar)
		// await message.channel.send(ascii)
	}
	
}

