const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	message.channel.send('Não dá curar o cancer com aspirina')     
}