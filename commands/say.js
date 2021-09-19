
exports.run = async (client, message) => {
	message.delete();
	var msg = message.content.split(' ').slice(1).join(' ');
	if (!msg) return message.reply('insira a sua mensagem.');  
	message.channel.send(msg);
    
};
