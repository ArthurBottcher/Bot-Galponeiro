
const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, args ) => {
	message.delete();
	let number = args.join(' ');
	const res = await axios.get(`http://numbersapi.com/${number}`)
console.log(number)
	let avatar = message.author.displayAvatarURL({format: 'png'});
	const embed = new Discord.MessageEmbed()
		.setColor('BLUE')
		.setTitle(`Data about number ${number}:`)
		.setDescription(res.data)
		.setTimestamp()
		.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
	
	
};