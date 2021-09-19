const express = require('express');
const app = express();
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); //pegando o prefixo
const axios = require('axios')

app.get("/", async(request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	
	try{
	
	const resAws = await axios.get('http://54.226.97.199:3000/') //VM nas AWS (relátorios)
	const resGcp = await axios.get('http://35.188.77.166:8000/status') //VM Google (extract)
	//api yopen
	//api dok plus
	//api workflux
	//api appcenter
	//

	console.log(resAws.data, resGcp.data)
	
		const guild = await client.guilds.cache.get('872920395987185736');
		const channel = await guild.channels.cache.get('872923298466504794');
		channel.send(resAws.data + ` AWS - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
		channel.send(resGcp.data + ` GCP - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
	
	}catch(err){
		const guild = await client.guilds.cache.get('850843765451259924');
		const channel = await guild.channels.cache.get('870768668869558342');
		channel.send(`A VM caiu :( Ative o modo monstro novamente!- ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
		console.log(err)

	}
	

	response.sendStatus(200);
});

app.get('/teste', (request, response) => {
	response.send('Hello World!')
}
)

app.listen(process.env.PORT); // Recebe solicitações que o deixa online


client.on('message', message => {
	//if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
	const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
	const command = args.shift().toLowerCase();
	try {
		const commandFile = require(`./commands/${command}.js`)
		commandFile.run(client, message, args);
	} catch (err) {
		message.channel.send('Este comando não existe!!')
		console.error('Erro:' + err);
	}
});


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token