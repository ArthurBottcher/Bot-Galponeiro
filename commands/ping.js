const axios = require('axios');

exports.run = async (client, message,) => {
	try{
	
		const resAws = await axios.get('http://54.226.97.199:3000/'); //VM nas AWS (relátorios)
		const resGcp = await axios.get('http://35.188.77.166:8000/status'); //VM Google (extract)
	
		const ping = new Date();
		ping.setHours(ping.getHours() - 3);
		message.channel.send(resAws.data + ` AWS - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
		message.channel.send(resGcp.data + ` GCP - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	} 
	catch{
		message.channel.send('Falhou!');
	} 
};