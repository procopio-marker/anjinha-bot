const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  name: "setimgwelcome",
  category: "Utilidades",
  aliases: ['img-welcome'],
  run: async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.banana('Ei, você não é adm!')
if(!args[0]) return message.banana('Você precisa mandar o link da imagem/gif para o welcome')
let gif = args[0]
if(!gif.includes("https://")) return message.reply('Gif/Imagem Inválido!')

let embed = new Discord.MessageEmbed()
.setColor("ff58c3")
.setDescription('Gif/Imagem setado com sucesso! \nnovo gif/imagem :')
.setImage(gif)
message.banana(embed)
db.set(`${message.guild.id}_gif`,`${gif}`)

}}