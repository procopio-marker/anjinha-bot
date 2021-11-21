const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("pretty-ms");

module.exports = {
    name: "crime",
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

    let user = message.author;
    let author = await db.fetch(`crime_${message.guild.id}_${user.id}`)

    let timeout = 9000333;
    
let anel = db.get(`gun_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem uma Arma, para obter uma use a!buy arma!**`)


    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle("CRIMINALIDADE ")
        .setDescription(`**roubar dnv?, quer ser preso? \n\nvolte em ${time.minutes}m ${time.seconds}s**`)
        .setThumbnail('https://www.folhadosulonline.com.br/arquivos/noticias/38857/large/ladraoarmado.jpg')
        .setFooter('ta me tirando o bandido')
        message.channel.send(timeEmbed)
      } else {

        let replies = [' assaltou um banco',' xingou otaku',' não odeia a Ste',' não é tatakae',' bateu em uma velhinha',' matou o anão blezedi']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 30000) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle("CRIMINALIDADE ")
        .setDescription(`**Você${replies[result]}\ne conseguiu ${amount}¥ ienes **`)
        .setThumbnail('https://st.depositphotos.com/1001033/3510/i/600/depositphotos_35101833-stock-photo-thief-stealing-a-laptop-computer.jpg')
         .setFooter(`Comando Executado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed1)
        
        db.add(`ienes_${message.guild.id}_${user.id}`, amount)
        db.set(`crime_${message.guild.id}_${user.id}`, Date.now())
    }; 
}}