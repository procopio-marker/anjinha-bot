const Discord = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed1 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , mencione alguém para casar!**`
  if (!user) return message.channel.send(embed1);

    let embed2 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , você não pode se casar com si mesmo!**`
   if (user == message.member) return message.channel.send(embed2);


if(user.id === 897836736711905311){
 return message.banana(`**Eu não posso casar com você, já sou casada com o Anjinho#5784**`) 
}

   let casado = db.fetch(`marry_${user.id}`)
   let embed4 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , o membro mencionado já esta casado com alguém!**`
   if (casado) return message.banana(embed4)

   let casado2 = db.fetch(`marry_${message.author.id}`)
   let prefixo = db.get(`ferinha_prefixo_${message.guild.id}`);
   if(prefixo === null) prefixo = 'a!'
   let embed5 = `<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , você já esta casado com alguém , utilize \`${prefixo}divorciar\` se quiser ser solteiro**`
   if (casado2) return message.banana(embed5)

  const embed6 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setDescription(`<@${user.id}> , ${message.author} quer se casar com você, aceita?`)
   message.banana(embed6).then(msg => {
  msg.react('💍');

  let filtro = (reaction, usuario) => reaction.emoji.name === '💍' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let embed7 = `**💍 | <@${user.id}> e ${message.author} Agora estão casados!!! e como presente setei uma badge no perfil de vocês, vejam utilizando a!perfil**`
 message.banana(embed7)
db.set(`casado_${user.id}`, '<:anel:894590845523730432>', message.author.username)
db.set(`casado_${message.author.id}`, '<:anel:894590845523730432>', user.user.username)
   })



  })

}