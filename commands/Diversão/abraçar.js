const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {
   message.delete()

   const { body } = await superagent.get('https://nekos.life/api/v2/img/hug')

   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Ueeee você quer abraçar um fantasma? mencione um user!`).then(message => message.delete({timeout: 20000}));
    }



   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`<:emoji_coracaorosa:885848380813754439> - **${message.author.username} abraçou ${user.username}! que amizade em amigos**`, avatar)
      .setImage(body.url)
      .setFooter('Clique em 🔁 para retribuir!', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`<:emoji_coracaorosa:885848380813754439> - **${user.username} retribuiu o abraço de ${message.author.username}!**`, avatar1)
      .setFooter('own que fofos, queria ta asim com ... 😞', user.displayAvatarURL())
      .setImage(body.url)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   });
}