const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {

  name:"autorole",
  category:"Moderação",
  aliases: [''],
  
run: async (client, message, args) => {

if(!args[0]) return message.channel.send("Digite `ON` ou `OFF`")
if(args[0] === "on") {
let role = message.mentions.roles.first()
if(!role) return message.channel.send({embed: {
  description: "**Você precisa mencionar uma cargo**",
  color: "#010101"
}});

 try {
 let a = await db.get(`autorole_${message.guild.id}`)
 if(a === role.id) {
   return message.channel.send("<:on_lh:884836163909722114> | Este cargo ja foi setado")
 } else {

 await db.set(`autorole_${message.guild.id}`, role.id)
 message.channel.send(`<:on_lh:884836163909722114> | ${role.name} setado como autorole`)
 }

 } catch (e) {
   return;
 }
}

if(args[0] === "off") {
  await db.delete(`autorole_${message.guild.id}`)
  message.channel.send("<:off_lh:884837143195840563> | Autorole desativado")
}
}}