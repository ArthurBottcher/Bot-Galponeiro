
const Discord = require("discord.js")
const c = new Discord.Client(); 

exports.run = async (client, message, args) => {
	message.delete()
	client.guilds.cache.get('872920395987185736').members.cache.forEach((m )=> {

		if(m.id != '870764131341455400'){
			console.log(m.id, m.user.username)
			m.voice.setChannel('872921601782452294')
			m.voice.setMute(true)
		}
		// console.log(message.author)
		if(m.id == message.author.id){
			console.log('não muta')
			m.voice.setMute(false)

		}
	})
    message.channel.send('Assunto/Reunião Urgente!!')
}
