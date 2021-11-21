const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('pretty-ms');

module.exports = {
  name: "cc",
  aliases: ['clonarcartão', 'clonarcartao'],
  run: async(client, message, args) => {
    

    let user = message.author;
    
    let author = await db.fetch(`cc_${message.author.id}_${user.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        message.banana(`<:r_nao_IDP_10K:885644800576069662> Você já clonou cartão hoje, volte em \`${time.minutes}m ${time.seconds}\``)
        
    } else {

        

        let amount = Math.floor(Math.random() * 2000) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("__Cc__ | Anjinha")
        .setColor("#ff58c3")
        .setDescription(`> <:R_certorosaTKF:885653956125159475> **Parabéns \`${message.author.username}\` Você acaba de clonar um cartão de crédito, e ganhou ${amount} AngelsCoins**`)
        .setFooter("webhacker 😡")
        .setTimestamp();

        message.banana(`${user}`, embed1);
        
        db.add(`money_${message.author.id}_${user.id}`, amount);
        db.set(`cc_${message.author.id}_${user.id}`, Date.now());
      };
   }
}
