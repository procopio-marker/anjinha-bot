const Discord = require("discord.js");


module.exports = {

    name:"changelog",
    category:"Misc",
    aliases: [''],

run: async (client, message, args) => {

    let embed = new Discord.MessageEmbed()

        .setColor('#ff58c3')
        .setTitle(`Anuncio | Anjinha`)
        .setDescription(`**O comando de anuncio entrou em manutenção <a:anjinha_loading:870421074045710358>
        
        Entre no nosso server de suporte para saber quando estiver pronto novamente utilizando a!suporte.**`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/842182536200192050/851702489404538920/Log.png`)
        
    message.channel.send(embed)
}}