exports.run = async (client, message) => {
	message.delete();
	message.channel.send('Amanda?');     
};