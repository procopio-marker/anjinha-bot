const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  name: "setwelcome",
  category: "Utilidades",
  aliases: ['bem-vindo', 'wel'],
  run: async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.banana('Ei! você não é adm, apenas adm pode usar')

if(!args[0]) return message.banana('Você tem que determinar o canal')
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if(!channel) return message.banana('Você tem que determinar o canal')
let id = channel.id
let embed = new Discord.MessageEmbed()
.setColor("ff58c3")
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription(`O Novo Canal De Welcome É ${channel}!`)
message.channel.send(embed)
db.set(`${message.guild.id}_channelID`,id)
}}