
const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Parece que você não tem permissões')
let server = message.guild
let prefix = db.fetch(`prefix_${server.id}`)
if(prefix === null) prefix = "a!"
  if(!args[0]) return message.channel.send('qual o novo prefix que você quer? não pode ter espaços!')
  let pe = args[0]
  message.channel.send('prefix mudado para ' + `${args[0]}`)
  db.set(`prefix_${server.id}`, args[0])
};