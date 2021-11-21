const discord = require("discord.js")
const db = require("quick.db")

module.exports ={ 
  name:'dep-all',
  aliases: ['depall', 'depositarall'],
  run: async (client,message,args) => {
    
    let member = db.fetch(`money_${message.author.id}_${message.author.id}`);
    if(member == null){
      return message.banana("Você não tem dinheiro para ser depositado")
    } else {

    let embed = new discord.MessageEmbed()
    .setTitle(' __Depositar All__ | Anjinha')
    .setColor("#ff58c3")
    .setDescription(`<:R_certorosaTKF:885653956125159475> Você depositou ${member} AngelsCoins em seu cofre!`)
      .setTimestamp()
      .setFooter("Olha só, xei da grana em!", client.user.displayAvatarURL())

    message.banana(embed)

    db.subtract(`money_${message.author.id}_${message.author.id}`,member)
    db.add(`banco_${message.author.id}_${message.author.id}`,member)

    }
  }
  }