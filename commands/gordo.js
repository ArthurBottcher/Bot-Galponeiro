const piadas = [
	'O % é tão gordo que do lado dele o Cesar Menotti parece um usuário de crack',
	'O % é tão gordo que se for cremado, vai ligar a Africa e a America novamente',
	'O % é o famoso 16 toneladas',
	'O % é tão gordo que quando entra no ambiente, fica sem ar e cria o vácuo',
	'O % não tem documento, porque ainda estão upando a foto 3x4 para a nuvem!',
	'Desde que o % começou a comer sushi. ninguem nunca mais viu a Moby Dick',
	'O % é tão gordo, que foram fazer lipoaspiração nele, e a seringa morreu de colesterol',
	'O % é tão gordo que a pressão dele é medida na escala richter',
	'O % é tão gordo, mas tão gordo que quando foram gravar o filme interestelar , pintaram ele de azul e verde para que ele fosse o dublê do planeta Terra',
	'O % é tão gordo mas tão gordo, que sua camisa é igual minha internet, 5G',
	'O % é tão gordo, mas tão gordo, que pra fazer uma camisa, 14.678.267 crianças do Uzbequistão precisam costurar por 14 meses sem dormir.',
	'O % é tão gordo que se suas tetas dessem leite, seria possível alimentar 136 mil filhotes de mastodontes e 13675 filhotes de mamute',
	'O % é tão gordo que não passou para o papel de dublê do godzila,  pois na escala de tamanho o Godzila era apenas 1/59885890 de seu tamanho.',
	'O % é tão gordo que se fizéssemos uma estátua sua em tamanho real seria necessário aglomerado argila equivalente a 6x o planeta terra.',
	'O % é tão gordo mas tão gordo, que caso ele pare de suar feito uma porca prenha, o volume de água no planeta reduz em 76%.',
	'O % foi para a praia, dormiu na areia e acordou numa plataforma do guincho Darcy Pacheco'

]
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
	let user = message.mentions.users.first() || client.users.cache.get(args[0])
	message.delete()
	rand = piadas[Math.floor(Math.random() * piadas.length)]
	await message.channel.send(rand.replace('%', user))  
}