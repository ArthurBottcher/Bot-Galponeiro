
const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, ) => {
	message.delete();
	let urlImage; 
	const rand = Math.floor(Math.random()*685); 
	const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);
	
	urlImage = res.data.sprites.other['official-artwork'].front_default;
	const specieData = await axios.get(res.data.species.url);
	let color = specieData.data.color.name.toUpperCase();
	if(color == 'PINK') color = '#FF64B4';
	if(color == 'GRAY') color = '#808080';
	if(urlImage != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'});
		const embed = new Discord.MessageEmbed()
			.setColor(color)
			.setDescription('Seu pokemon: '+ res.data.name)
			.setImage(`${urlImage}`)
			.setTimestamp()
			.setFooter(rand)
			.setAuthor(message.author.tag, avatar);
		await message.channel.send(embed);
	}
	
};