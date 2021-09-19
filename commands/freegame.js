
const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, ) => {
	message.delete();
	let urlImage; 
	const res = await axios.get(`https://www.freetogame.com/api/games`)
	const rand = Math.floor(Math.random()*res.data.length); 
    console.log(res.data[number])
    let name = res.data[number].title
    let plat = res.data[number].platform
    let image = res.data[number].thumbnail
	console.log(name, plat, image)
	if(image != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'});
		const embed = new Discord.MessageEmbed()
			.setColor('RED')
			.setTitle(`Free Game: ${name}`)
			.setDescription(`Plataforma: ${plat}`)
			.setImage(`${image}`)
			.setTimestamp()
			.setAuthor(message.author.tag, avatar);
		await message.channel.send(embed);
	}
	
};