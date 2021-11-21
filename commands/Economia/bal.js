const {MessageEmbed} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "perfil",
  aliases: ["profile"],
  description: "comando para tocar música",
  run: async(client, message, args) => { 

  const membro = message.mentions.members.first() || message.author;

  let moedas = db.fetch(`moedas_${message.guild.id}_${membro.id}`)
  if (moedas === null) moedas = 0;

  let banco = await db.fetch(`bank_${message.guild.id}_${membro.id}`)
  if (banco === null) banco = 0;

  const moneyEmbed = new MessageEmbed()
  .setColor("GRAY")
  .setTitle("Saldo de " + membro.user.username)
  .addFields(
    {name: '> Moedas', value: `${moedas}`, inline: true},
    {name: '> Depositado', value: `${banco}`, inline: true}
  )
  message.reply({embeds: [moneyEmbed]})  
}
}