const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
    name: "c*",
    aliases: "vida",
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

  let user = message.author;

  function isOdd(num) { 
	if ((num % 100) == 0) return false;
	else if ((num % 1.5) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 30);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('A VIDA OU O CU ')
.setDescription(`** Digite assim: a!cu apostar <valor>**`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

let moneymore = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setDescription(`** Você acha que eu sou burra?,\n não aposte coisas que você não tem!**`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

let colorbad = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('A VIDA OU O CU')
.setDescription(`** Digite assim: a!cu apostar <valor>**`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
   
    if (colour == "r" || colour.includes("apostar")) colour = 1;
    else return message.channel.send(colorbad);
    
    
   
       if (isOdd(random) && colour == 1) {
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('A VIDA OU O Cu ')
        .setDescription(`** ${message.author}, você apostou\n seu cu e ganhou ${money} AngelsCoins.**`)
        .setThumbnail('https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg')
         .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(moneyEmbed2)
    } else { // Wrong
       money * 2
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('A VIDA OU O Cu')
        .setDescription(`** ${message.author}, você apostou\n sua vida e perdeu ${money} AngelsCoins**`)
        .setThumbnail('https://www.mpbordados.com.br/App_Controls/ProdImg.ashx?d=4&p=4577')
         .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(moneyEmbed4)
    }

 
}}