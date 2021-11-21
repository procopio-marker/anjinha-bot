const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
    name: "mendigar",
    aliases: ["pedir", "implorar", "mendigar"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {


  let user = message.author;

  let timeout = 6000000;

  let author = await db.fetch(`mendigar_${message.author.id}_${user.id}`)  
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        message.banana(`<:r_nao_IDP_10K:885644800576069662> Hm, você já mendigou hoje! Volte daqui \`${time.minutes}m ${time.seconds}\``)
        

  } else {

let amount = Math.floor(Math.random() * 2000) + 1;

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('HORA DA MENDIGAGEM  🙏')
  .setDescription(`** Você implorou e conseguiu ${amount} AngelsCoins**`)
   .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(moneyEmbed)
  db.add(`money_${message.author.id}_${user.id}`, amount)
  db.set(`mendigar_${message.author.id}_${user.id}`, Date.now())


  }
}}