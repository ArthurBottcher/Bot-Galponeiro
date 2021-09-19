
const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, ) => {
	message.delete();
	let urlImage; 
	const rand = Math.random(1,685); 
	await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
		.then((res) => {
			urlImage = res.data.sprites['other']['official-artwork']['front_default'];
		})
		.catch(() => {
			message.reply('Ops');
		});

	if(urlImage != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'});
		const embed = new Discord.MessageEmbed()
			.setColor('#f2eb24')
			.setDescription('Seu gif: ')
			.setImage(`${urlImage}`)
			.setTimestamp()
			.setFooter(rand)
			.setAuthor(message.author.tag, avatar);
		await message.channel.send(embed);
	}
	
};