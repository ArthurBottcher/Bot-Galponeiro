const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	try{
	
	const resAws = await axios.get('http://54.226.97.199:3000/') //VM nas AWS (relátorios)
	const resGcp = await axios.get('http://35.188.77.166:8000/status') //VM Google (extract)
	
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
		message.channel(resAws.data + ` AWS - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
		message.channel(resGcp.data + ` GCP - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
	}
	catch{
		canal.send(`A VM caiu :( Ative o modo monstro novamente!- ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
	}
        
}