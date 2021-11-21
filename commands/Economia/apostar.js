const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "apt",
  aliases: ["aposta", 'apostar', "coinflip", "coinflip", "apost"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
  run: async (client, message, args) => {


  let money = (args[2])

  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
  

  let carteira = await db.fetch(`ienes_${message.guild.id}_${message.author.id}`)

  
let bot = "788146515386040331"

    let potata = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('APOSTA')
.setDescription(`** Você quer se apostar Comigo? Amigo, acho que não...**`)
.setThumbnail('https://media0.giphy.com/media/lgBQpM00TB8n6/source.gif')
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
   if (user == bot) return message.reply(potata);


let que = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('APOSTA ')
.setDescription(`**Escreva o comando como o exemplo abaixo:**\n*a!apostar (cara/coroa) @user <quantia>*.`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

    if (!(args[2])) return message.reply(que);




let pobre = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setDescription(`** Você acha que eu sou burra?,\n não aposte coisas que você não tem!**`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

   if (money > carteira) return message.channel.send(pobre)


let carteirauser = await db.fetch(`ienes_${message.guild.id}_${user.id}`)

let moneyEmbed2 = new Discord.MessageEmbed()
.setColor("#ff58c3")
   .setTitle('APOSTA')
  .setDescription(`** ${user} não tem dinheiro para essa aposta!**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
if (money > carteirauser) {
    return message.channel.send(moneyEmbed2)
}





const embed = new Discord.MessageEmbed()
.setColor("#ff58c3")
   .setTitle('APOSTA')
  .setDescription(`**${user}\nO usuário ${message.author.tag} te convidou\n para uma aposta, aceita?!**`)
  .setThumbnail("https://64.media.tumblr.com/1891a2b574c77cfa8abb7356324bc4f5/tumblr_mlaskrk7vy1soqb33o1_250.gifv")
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
message.channel.send(embed).then(msg => {
  msg.react('✅');


  let filtro = (reaction, usuario) => reaction.emoji.name === '✅' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});



  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
let baka = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('APOSTA')
.setDescription(`** Escreva o comando como o exemplo abaixo:**\n*a!apostar (cara/coroa) @user <quantia>*.`)
 .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.reply(baka);

    let falabad = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('APOSTA ')
.setDescription(`** Não esqueça de mencionar a pessoa com quem você quer apostar.**`)
.setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

  if (!user) return message.channel.send(falabad);

    
  } coletor.on("collect", r => {
    r.remove(message.author.id);
      if (args[0].toLowerCase() == array1[rand]) {
        db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
        db.add(`ienes_${message.guild.id}_${message.author.id}`, money)
     let moneyEmbed1 = new Discord.MessageEmbed()
     .setColor("#ff58c3")
        .setTitle('APOSTA ')
        .setDescription(`**Deu ${array1[rand]}! \n ${message.author} ganhou ${money}¥ ienes.**`)
        .setThumbnail('https://media0.giphy.com/media/1fkzQQWiixH7mvhOtK/giphy.gif')
         .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(moneyEmbed1)
        
  } 
else if (args[0].toLowerCase() != array1[rand]) {
   db.subtract(`ienes_${message.guild.id}_${message.author.id}`, money)
   db.add(`ienes_${message.guild.id}_${user.id}`, money)
    let moneyEmbed4 = new Discord.MessageEmbed()
    .setColor("#ff58c3")
        .setTitle('APOSTA')
        .setDescription(`**Deu ${array1[rand]}!\n  ${user} ganhou ${money}¥ ienes!!**`)
        .setThumbnail('https://data.whicdn.com/images/34517913/original.gif')
         .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(moneyEmbed4)
       
  }

  })

})
}}