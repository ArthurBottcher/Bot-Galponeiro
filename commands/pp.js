const piadas =[
	'Sortudo é o Gugu, que não é nem final de ano e já acertou na quina',
	'Sabe qual a diferença entre a pizza e o judeu? A pizza não grita no forno',
	'Sabe quando Hitler perdeu a guerra? Quando chegou a conta do gás'
]

const Discord = require("discord.js")
exports.run = async (client, message, args) => {
	message.delete()
	rand = piadas[Math.floor(Math.random() * piadas.length)]
	await message.channel.send('Hora da piada pesada: '+ rand)  
}