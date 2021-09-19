const randInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

const data = {

	liquido:[
		"água",
		"cerveja",
		"chimarrão",
		"cachaça",
		"água de poço",
		"água suja",
		"água da chuva",
		"bosta de vaca",
		"orvalho de goteira",
		"soro fisiológico",
		"conhaque",
		"whisky escocês",
		"mijo de égua",
		"café preto",
		"caldo de feijão",
		"caldo de cana",
		"pus de espinha",
		"caganeira de vó",
		"sangue de ferida",
		"suco de caju",
		"marmelada de banana",
		"extrato e tomate",
		"sorvete de tamarindo",
		"suco de tamarindo",
	],

	fruta : [
		"melão",
		"bergamota",
		"jaca",
		"laranja do céu",
		"uva pederneira",
		"coco queimado",
		"pinhão",
		"tomate seco",
		"laranxinha",
		"insulina",
		"bom bom",
		"bombonzinho"
	],

	parteDoCorpo :[
		"a cabeça",
		"a perna",
		"a panturrilha",
		"o sovaco",
		"o dedão do pé",
		"a orelha esquerda",
		"a unha encravada",
		"o cotovelo esquerdo",
		"a pupila",
		"o umbigo",
		"no ânus",
		"o guarda-chuva",
		"no pênis",
		"o cabelo",
		"a rola",
		"a falange",
		"o exôfago",
		"o intestino delgado",
		"a língua",
		"a espinha",
		"a sambica",
		"o pênis",
		"o ânus",
		"o reto",
	],

	musica : [
		"vanerão",
		"pagode",
		"funk",
		"elton john",
		"michael jackson",
		"é o tchan",
		"cumpade washington",
		"bob marley",
		"amado batista",
		"zezé de camargo",
		"louvor",
		"araketu",
		"calipso",
		"Djavu",
		"fala mansa",
		"joelma",
		"menino da porteira",
		"baitaca",
		"fundo da grota",
		"Bruno Mars",
		"punk rock",
		"Comunidade Ninjitsu",
		"Gordinho Bololo"
	],

	objeto :[
		"poste de luz",
		"pedra",
		"calça jeans",
		"poste",
		"arvore",
		"janela de vidro",
		"bicicleta",
		"chapéu",
		"privada suja",
		"marfim",
		"sofá rasgado",
		"fiat uno",
		"fusca velho",
		"caralho alado voado flamejante",
		"carruagem de fogo",
		"cg titan",
		"cabrito de madeira",
		"fone de ouvido",
		"assoalho de madeira",
		"cepo de madeira",
		"martelo de vidro",
		"balde de oxigênio",
		"roteador intelbras",
		"entrada usb",
		"escorredor de macarrão",
		"palito de picolé",
		"vassoura de palha",
		"estaca de matar vampiro",
		"negócio de jogar do Gudá",
		"Raquetá",
		"violão",
		"um bola",
		"lixeira cagada",
		"vaso entupido",
		"fio terra",
		"maquininha"
	],

	animal : [
		"saracura",
		"graxaim",
		"curupira",
		"lobo-guará",
		"Amanda",
		"lambisgóia",
		"zurrilho",
		"cachorro",
		"cusco",
		"javali",
		"sobrinho do tio do pai do coisa",
		"marmota",
		"castor",
		"bicho grilo",
		"borboleta",
		"arraia",
		"Amanda",
		"tubarão martelo",
		"peixe-palhaço",
		"camaleão",
		"cats miau",
		"cobra naja",
		"maranduvá",
		"estrela do mar",
		"mexilhão",
		"tatu bola",
		"onça pintada",
		"elefante marinho",
		"pitoco",
		"negócio de jogá do guda",
		"asno",
		"anta",
		"mamute",
		"macake",
		"mamaco",
		"Maria",
		"papacu",
		"Arthur",
		"Felipe",
		"Éricles",
		"Eduardo José",
		"Derik",
		"Elysson",
		"Victor",
		"Orlandini",
		"Borges",
		"eletricista",
		"Dominatrix",
		"Anderson",
		"Dieison",
		"Dianho",
		"Malco",
		"Ruardo",
		"Péricles",
		"Dimitri",
		"Anão Barbudo",
		"Ursinho Pooh"
	],

	cores : [
		"azul",
		"amarelo",
		"verde-limão",
		"marrom-pastel",
		"bordo",
		"roxo-neon",
		"azul-farol",
		"amarelo caganeira",
		"vermelho encarnado",
		"laranja",
		"marfim",
		"arco iro",
		"cor de burro quando foge",
		"cor de",
		"gelo",
		"incolor",
		"arco íris",
	],

	statusAtual : [
		"triste ,",
		"com sarna ,",
		"com problema ,",
		"nas nuvens ,",
		"sonhando ,",
		"feliz ,",
		"de luto ,",
		"com raiva ,",
		"indignado ,",
		"faceiro ,",
		"de boas ,",
		"sem saco ,",
		"maroto ,",
		"sorrindo atoa ,",
		"com depressão ,",
		"esquizofrenico ,",
		"puto ,",
		"chapado ,",
		"galponeiro ,",
		"tóxico ,"
	],	

	fatos :[
		{ fato: "dança ", precisa: ["musica"] },
		{ fato: "lambe ", precisa: ["objeto"] },
		{ fato: "morde caroço ", precisa: ["fruta"], extra: "de " },
		{ fato: "olha torto", precisa: ["objeto"], extra: "pra " },
		{ fato: "pula pra tráz", precisa: [] },
		{ fato: "caminha em duas patas", precisa: [] },
		{ fato: "vê estrelinhas", precisa: [] },
		{ fato: "vira cambalhota", precisa: [] },
		{ fato: "conhece", precisa: ["musica"] },
		{ fato: "dorme em dia quente", precisa: [] },
		{ fato: "joga vôlei de praia", precisa: [] },
		{ fato: "conhece o dono", precisa: [] },
		{ fato: "bate palma com as mãos", precisa: [] },
		{ fato: "vira a noite olhando pro chão", precisa: [] },
		{ fato: "faz fio terra", precisa: []},
		{ fato: "bebe", precisa: ["liquido"] },
		{ fato: "pula", precisa: ["objeto"], extra: "de " },
		{ fato: "bate ", precisa: ["objeto"], extra: "em " },
		{ fato: "lambe", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "enfia o dedo", precisa: ["objeto", "parteDoCorpo"], extra: "em " },
		{ fato: "coça", precisa: ["parteDoCorpo"] },
		{ fato: "cutuca", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "sopra", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "enfia", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "esfrega o ânus ,", precisa: ["objeto", "musica"], extra: "em "},
		{ fato: "da mortal pra trás", precisa: ["objeto", "musica"] },
		{ fato: "faz fofoca pra", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "rouba", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "rola", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "beija", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "caga", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "mija", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "garganteia", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "desdobra", precisa: ["objeto", "parteDoCorpo"] },
		{ fato: "atira", precisa: ["musica", "parteDoCorpo"] },
		{ fato: "busca", precisa: ["objeto", "parteDoCorpo"] },
	]
}

function precisa(config) {
	let item = config.precisa[randInterval(0, config.precisa.length - 1)];
	return (
		" " +
		(config.extra ? config.extra : " ") +
		" " +
		data[item][randInterval(0, data[item].length - 1)]
	);
}

function caracterizacaoAleatoria() {
	let decisaoAleatoria = randInterval(0, 1) == 1;
	if (decisaoAleatoria) {
		return data.cores[randInterval(0, data.cores.length - 1)];
	}
	return data.statusAtual[randInterval(0, data.statusAtual.length - 1)];
}

function gerar() {
	let a = data.animal[randInterval(0, data.animal.length - 1)];

	let b = Object.assign({}, data.fatos[randInterval(0, data.fatos.length - 1)] );

	let negativoAleatorioA = randInterval(0, 4) == 1;
	if (negativoAleatorioA) {
		b.fato = " não " + b.fato;
	}
	
	let c = "";

	if (b.precisa.length) {
		c = precisa(b);
		let caracterizarAleatoriamente = randInterval(0, 1) == 1;
		if (caracterizarAleatoriamente) {
			c = c + " " + caracterizacaoAleatoria();
		}
	}

	var d = Object.assign({}, data.fatos[randInterval(0, data.fatos.length - 1)]);

	while (d == b) {
		d = Object.assign({}, data.fatos[randInterval(0, data.fatos.length - 1)]);
	}
	
	let negativoAleatorioB = randInterval(0, 3) > 0;
	if (negativoAleatorioB) {
		d.fato = " não " + d.fato;
	}

	let e = "";
	if (d.precisa.length) {
		e = precisa(d);
		let caracterizarAleatoriamente = randInterval(0, 3) == 1;
		if (caracterizarAleatoriamente) {
			e = e + " " + caracterizacaoAleatoria();
		}
	}

	let resultado =
		a + " que " + b.fato + c + " " + d.fato + " " + e;
	return resultado;
}

const Discord = require("discord.js")
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	
	const embed = await new Discord.MessageEmbed()
	    .setColor('#f2eb24')
	    .setTitle(`Ditado do Elysson`)
        .setDescription(gerar())
	    .setTimestamp()
	await message.channel.send(embed)
        
}