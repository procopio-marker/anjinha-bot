const Discord = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed2 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , Mencione seu marido(a) para que ele(a) possa saber**`
  if (!user) return message.banana(embed2);

    let embed1 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , Você não pode se auto-divorciar!`
   if (user == message.member) return message.banana(embed1);

  const embed3 = `<a:w_exclama:886244202105667655> **| <@${user.id}> , O usuário ${message.author.tag} se divorciou de você! \n Pela taxa do divorcio eu cobrei 100 AngelsCoins!!**`
   message.banana(embed3)

   db.delete(`casado_${user.id}`, '💍', message.author.username)
   db.delete(`casado_${message.author.id}`, '💍', user.user.username)
   db.subtract(`money_${message.guild.id}_${user.id}`, 100)
}