const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('pretty-ms');

module.exports = {
  name: "fight",
  aliases: ['lutar', 'batalhar'],
  run: async(client, message, args) => {
    

    let user = message.author;
    
    let author = await db.fetch(`fight_${message.author.id}_${user.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        message.banana(`<:R_certorosaTKF:885653956125159475> Ops, você já batalhou hoje! Volte daqui \`${time.minutes}m ${time.seconds}\``)
        
    } else {

        let replies = ['8 AngelLifer,', '4 AngelBoss', '16 AngelicalTrifer', '22 AngelJonks']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 1500) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setTitle(" __Lutar__ | Anjinha")
        .setColor("#ff58c3")
        .setDescription(`> <:v_pontinhorosatdn:885654411244867604> **Parabéns \`${message.author.username}\` você lutou com ${replies[result]}, e recebeu;\n> <:v_setinharosaTDN:885653700301971457> ${amount} AngelsCoins**`)
        .setFooter("・Passa esse hack, matou tudo cara.")
        .setTimestamp();

        message.banana(`${user}`, embed1);
        
        db.add(`money_${message.author.id}_${user.id}`, amount);
        db.set(`fight_${message.author.id}_${user.id}`, Date.now());
      };
   }
}
