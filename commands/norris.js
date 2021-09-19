
const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, ) => {
	message.delete();
	let urlImage; 
	const rand = Math.floor(Math.random()*685); 
	const res = await axios.get(`https://api.chucknorris.io/jokes/random`)
	
	urlImage = res.data.icon_url
	const value = res.data.value
   	
	if(urlImage != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'});
		const embed = new Discord.MessageEmbed()
			.setColor('ORANGE')
			.setTitle('Chuck Norris Jokes')
			.setDescription(value)
			.setImage(`${urlImage}`)
			.setTimestamp()
			.setFooter(rand)
			.setAuthor(message.author.tag, avatar);
		await message.channel.send(embed);
	}
	
};