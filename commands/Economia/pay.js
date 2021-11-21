const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
    name: "pay",
    aliases: ["pagar", "pay", 'pago', 'pague'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {
 
 

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('PAGAMENTO  💳')
  .setDescription(`**Mencione alguém para pagar.**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO  💳')
  .setDescription(`**Especifique uma quantidade para pagar.**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO  💳')
  .setDescription(`** Você não pode pagar dinheiro negativo!**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO  💳')
  .setDescription(`**Você não tem muito dinheiro :/**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

const embed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO  💳')
  .setDescription(`**${message.author.tag}, Você quer dar ${args[1]} AngelsCoins\n para ${user}, tem certeza?**`)
  .setThumbnail("https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/07/19084930/metodos-pagamento-vivo-tech.gif")
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
message.channel.send(embed).then(msg => {
  msg.react('✅').then(() => {
  })
  
  let filtro = (reaction, usuario) => reaction.emoji.name === '✅' && usuario.id === message.author.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id)
    r.remove(user.id)

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO  💳')
  .setDescription(`** Você pagou ${user.user.username} com ${args[1]} AngelsCoins**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])
  msg.delete()
  })

})
}}






