const frases = [
	'Olá rapazes',
	'#pas',
	'Gangster Galponeiro',
	'Vai estrunchar as pantufinhas da guria',
	'Tu com essas pata de urso',
	'Dianho é agro, Dianho é pop, Dianho é tudo!',
	'Dianho do céu',
	'Todo Nicolas Cagezinho',
	'Modo Monstro ativado',
	'Na Irlanda do Norte eu sou um Deus',
	'Agora a NASA vem',
	'Quase infartei cupinxa',
	'Jurei que eu estava sendo seguido'
]
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
	message.delete()
	rand = frases[Math.floor(Math.random() * frases.length)]
	await message.channel.send(rand)  
}