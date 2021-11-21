
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
     'https://i.imgur.com/sGVgr74.gif',
     'https://i.imgur.com/8LKPbOf.gif',
     'https://i.imgur.com/TItLfqh.gif',
     'https://i.imgur.com/wQjUdnZ.gif',
     'https://i.imgur.com/lmY5soG.gif',
     'https://i.imgur.com/YbNv10F.gif',
     'https://i.imgur.com/KLVAl0T.gif',
     'https://i.imgur.com/IgGumrf.gif',
     'https://i.imgur.com/KKAMPju.gif',
     'https://i.imgur.com/e0ep0v3.gif'
]
    var list1 = [
     'https://i.imgur.com/mNEHfJ0.gif',
     'https://i.imgur.com/0WWWvat.gif',
     'https://i.imgur.com/MGdlYsj.gif',
     'https://i.imgur.com/f86DzYb.gif',
     'https://i.imgur.com/4h7uBat.gif',
     'https://i.imgur.com/YOQgZqY.gif',
     'https://i.imgur.com/s3DggdT.gif',
     'https://i.imgur.com/KWM6eIB.gif',
     'https://i.imgur.com/709chb9.gif',
     'https://i.imgur.com/YkrEkbF.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você quer beijar oque? o vento? mencione uma pessoa para beijar!`)
    }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setTitle('<a:flushed_time:886020076296343552> UEPAAAAAAAAAA!')
      .setDescription(`<:emoji_coracaorosa:885848380813754439> - ${message.author} Beijou ${user}. Eu daria um casal fofo`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!')

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setDescription(`<:emoji_coracaorosa:885848380813754439> - ${user} retribuiu o beijo de ${message.author}!`, avatar1)
      .setImage(rand1)
      .setFooter('💘 uiui que fofos! Me chama pra ser madrinhaaaaa')

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   })
}  
