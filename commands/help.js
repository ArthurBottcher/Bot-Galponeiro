const Discord = require('discord.js');
const fields = [
	{name: '15hrs', value: '', inline: false},
	{name: 'açai', value: '', inline: false},
	{name: 'amanda', value: '', inline: false},
	{name: 'aspirina', value: '', inline: false},
	{name: 'bombom', value: '', inline: false},
	{name: 'brunomars', value: '', inline: false},
	{name: 'chatice', value: '', inline: false},
	{name: 'coinflipt', value: 'Escolha cara ou coroa', inline: false},
	{name: 'conselho', value: '', inline: false},
	{name: 'dedo', value: '', inline: false},
	{name: 'dev', value: '', inline: false},
	{name: 'dianho', value: '', inline: false},
	{name: 'ditado', value: '', inline: false},
	{name: 'faustinho', value: '', inline: false},
	{name: 'felipe', value: '', inline: false},
	{name: 'freegame', value: 'Te mostra um jogo gratuito', inline: false},
	{name: 'gif', value: 'Escreva um termo para buscar um gif', inline: false},
	{name: 'gordo', value: 'Marque alguém', inline: false},
	{name: 'insulina', value: '', inline: false},
	{name: 'kiss', value: 'Marque alguem', inline: false},
	{name: 'laranjinha', value: '', inline: false},
	{name: 'marcelo', value: '', inline: false},
	{name: 'megazord', value: '', inline: false},
	{name: 'napratica', value: '', inline: false},
	{name: 'norris', value: '', inline: false},
	{name: 'number', value: 'Informe um número', inline: false},
	{name: 'pato', value: 'Marque alguém', inline: false},
	{name: 'poke', value: '', inline: false},
	{name: 'pp', value: 'Piadas Pesadas', inline: false},
	{name: 'ppt', value: 'Escolha: pedra, papel ou tessoura', inline: false},
	{name: 'religion', value: '', inline: false},
	{name: 'rufus', value: '', inline: false},
	{name: 'say', value: 'Escreva algo para o bot dizer', inline: false},
	{name: 'sumo', value: '', inline: false},
	{name: 'tia', value: '', inline: false},
	{name: 'tomate', value: '', inline: false},
	{name: 'veio', value: '', inline: false},
	{name: 'vote', value: '', inline: false},
	{name: 'wiki', value: 'Escreva um termo para buscar no wikipédia', inline: false},
];
exports.run = async (client, message) => {
	
	const embed = new Discord.MessageEmbed()
		.setColor('#')
		.setTitle('Meus comandos')
		.setDescription('Fique a vontade para sugerir novos comandos, Meu prefixo é !')
		.addFields(fields)
		.setTimestamp();
	await message.channel.send(embed);	
};
