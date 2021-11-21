const db = require('quick.db')

module.exports = {
  
  run: async (client, message, args) => {

    const ownerid = '839970026740121641'

    if (message.author.id === ownerid) {
      let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

 db.set(`criador_${user.id}`, '<a:criador_coroa:894589342218063902>');

 message.channel.send(`<:R_certorosaTKF:885653956125159475> **|** ${message.author} Coroa setada no seu perfil com sucesso`)
    } else {
      message.channel.send(`<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , apenas meu dono pode usar esse comando!**`)
    }

    
    
  }
}