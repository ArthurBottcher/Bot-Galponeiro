const Discord = require('discord.js')
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let tag = args.join(' ')
	let urlImage 
	if (!tag) return message.reply('lembre-se de colocar uma tag')

	await axios.get("https://g.tenor.com/v1/random?q=" + tag + "&key=BCM2F2KWSZ14&limit=1&contentfilter=off")
	.then((res) => {
		// const r = JSON.parse(res)
		urlImage = res.data.results[0].media[0].gif.url
	})
	.catch((err) => {
	  	message.reply(`Termo não encontrado!`)
		//   console.log(err)
	})
	if(urlImage != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'})
		const embed = new Discord.MessageEmbed()
	    	.setColor('#f2eb24')
	    	.setDescription(`Seu gif: `)
        	.setImage(`${urlImage}`)
	    	.setTimestamp()
			.setFooter(tag)
        	.setAuthor(message.author.tag, avatar)
		await message.channel.send(embed)
	}
	
}