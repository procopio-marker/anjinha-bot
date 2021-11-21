const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "setmessage",
  category: "Utilidades",
  aliases: ['setmesagem', 'st'],
  run: async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Parece que você não tem permissões')
let msg = args.join(' ')
const embed0 = new Discord.MessageEmbed()
  .setTitle('<:anjinha_config:886246600693932062> Configure sua mensagem de boas vindas')
  .setDescription(`<:v_setinharosaTDN:885653700301971457> Este são as configurações que podem ser utilizados na mensagem.\n> **[guild.name]** - Nome do servidor;\n> **[member.name]** - Nome do usuário;\n> **[member]** - Nome do usuário com menção;\n> **[member.tag]** - Puxa a tag do usuário;\n> **[member.id]** - Puxa o id do user/usuário.\n> **[members]** - Puxa quantidade de membros no servidor\n\n<:v_pontinhorosatdn:885654411244867604> Exemplo: Olá **[member]** seja bem vindo a **[guild.name]**, agora temos **[members]** no servidor`)
  .setColor('ff58c3')
  return message.banana(embed0)
db.set(`${message.guild.id}_msg`,msg)
let one = msg.replace('[guild.name]', message.guild.name)
let two = one.replace('[member.name]',message.author.username)
let there = two.replace('[member]',message.author)
let four = there.replace('[members]', message.guild.members.cache.size)
let five = four.replace('[member.tag]',message.author.tag)
let six = five.replace('[member.id]',message.author.id)
msg = six
let embed = new Discord.MessageEmbed()
.setColor("ff58c3")
.setTitle('A mensagem de Boas Vindas Foi Mudada!')
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription('Mensagem de boas vindas mudada para: ' + msg)
message.channel.send(embed)
}}