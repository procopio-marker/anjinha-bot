const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "ativar-vip",
  category: "Administrators",
  run: async (client, message, args) => {
	  
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.banana(`Você não pode usar esse comando.`)
      
      
      if(!args[0]){
          message.channel.send(`Você precisa enviar o id da categoria!`)
          return;
      }

      db.set(`CategoriaVip_${message.guild.id}`)
      
      const embed = new Discord.MessageEmbed()
      .setColor([255, 182, 193])
      .setAuthor(`Sistema de Vip | Anjinha`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Categoria vip setada com sucesso!`)
      .setFooter(`Comando utilizado por ${message.author.tag}`, message.author.displayAvatarURL())
      message.banana(embed) 
  },
}; 
