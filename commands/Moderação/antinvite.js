const Discord =  require ('discord.js')
const db = require('quick.db')

module.exports = {

  name:"inviteblock",
  category:"Moderação",
  aliases: ['inviteblocker'],

  run: (client, message, args) => {
    const op = args[0]

    let embed1 = new Discord.MessageEmbed()
    .setColor('#010101')
    .setDescription('**Para Ativar o invite block digite \`on\` na frente do comando, e para Desativar \`off\`**')
    
    if (!op) message.channel.send(embed1)
    
    if(op == 'off') {
      let embed2 = new Discord.MessageEmbed()
      .setColor('#010101')
      .setDescription('<:off_lh:884837143195840563> **|** Anti-Invite OFF')
      
      db.delete(`inviteop_${message.guild.id}`)
      message.channel.send(embed2)
    }

    if(op == 'on') {
      let embed3 = new Discord.MessageEmbed()
      .setColor('#010101')
      .setDescription('<:anjinha_on:886246957423673386> **|** Anti-Invite ON')
      
      db.set(`inviteop_${message.guild.id}`, 'on')
      message.channel.send(embed3)
    }
  }
}