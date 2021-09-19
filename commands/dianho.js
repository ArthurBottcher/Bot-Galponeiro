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
];

exports.run = async (client, message,) => {
	message.delete();
	const rand = frases[Math.floor(Math.random() * frases.length)];
	await message.channel.send(rand);  
};