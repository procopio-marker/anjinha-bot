const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {

    name:"premium",
    category:"Misc",
    aliases: ['set-premium'],

run: async (client, message, args) => {

    const ownerid = '839970026740121641'

    if (message.author.id === ownerid) {
      let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

 db.set(`premium_${user.id}`, '<a:saturnpink:886244062636687402>');


      const embed = new Discord.MessageEmbed()
.setTitle(`__Premium__ | Anjinha`)
.setDescription(`Ebaaa, o(a) ${user} acabou de receber premium, com isso obteu a badge <a:saturnpink:886244062636687402> no seu perfil`)
      .setFooter(`Use a!perfil para ver sua Badge | Perfil em desenvolvimento`)
.setColor("ff58c3")
      message.banana(embed)
    } else {
      message.banana(`<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , apenas meu dono pode usar esse comando!**`)
    }

    
    
  }
}