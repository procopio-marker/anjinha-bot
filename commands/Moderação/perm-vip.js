const Discord = require("discord.js");
const db = require('quick.db');
module.exports = {
  name: "setvip",
  aliases: ["vipset", "setarvip", "darvip", ""],

  run: async(client, message, args) => {

      if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Você não pode usar esse comando.`)
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      
      const vip = db.get(`Vip_${message.guild.id}_${user.id}`)
      
      if(!user){
          message.banana(`Você precisa mencionar alguém!`)
          return;
      }
      
      if(vip){
          message.banana(`Esse usuario já é um usuario Vip!`)
          return;
      }

      db.set(`Vip_${message.guild.id}_${user.id}`, true)
      
      const embed = new Discord.MessageEmbed()
      .setColor("ff58c3")
      .setAuthor(`Sistema de Vip | Anjinha™`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`O usuário ${user} foi adicionado na lista de Vips com sucesso! agora você pode configurar seu vip usando a!vip`)
      .setFooter(`vip setado por ${message.author.tag}`, message.author.displayAvatarURL())
      message.banana(embed)
      }
  }