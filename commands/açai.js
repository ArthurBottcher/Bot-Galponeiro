exports.run = async (client, message,) => {
	message.delete();
	message.channel.send('Vamos sair para comer um açaí?');     
};