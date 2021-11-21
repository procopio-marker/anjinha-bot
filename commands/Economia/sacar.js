  
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
    name: "sacar",
    aliases: ["saque", "retirar", 'withdraw'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

 

  let user = message.author; 

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`banco_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`banco_${message.guild.id}_${user.id}`)

    db.subtract(`banco_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('AGUARDE... ')
  .setDescription(`> **<:v_setinharosaTDN:885653700301971457> Imprimindo nota fiscal..\n\n<a:rs_verific_TKG:817950424762023957> Você sacou todas os ienes de seu cofre**`)
  .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setDescription(`** KK ué?, quanto você quer sacar?**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('TENTATIVA DE SAQUE  ❌')
  .setDescription(` **Você não tem essa quantia no cofre :(**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('AGUARDE... ')
  .setDescription(`** Imprimindo nota fiscal..\n\n  Você sacou ${args[0]} AngelsCoins do cofre**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

  message.channel.send(embed5)
  db.subtract(`banco_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}}