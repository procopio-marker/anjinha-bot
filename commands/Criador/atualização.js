const Discord = require("discord.js");


module.exports = {

    name:"atualização",
    category:"Misc",
    aliases: [''],

run: async (client, message, args) => {

    let embed = new Discord.MessageEmbed()

        .setColor('#ff58c3')
        .setTitle(`Change-Log`)
        .setDescription(`**Atualização Feita 16/10/2021**

         Adicionados:

       Sistema de música.\n Comandos:\n> play, stop, skip, lyrics (Em breve novos comandos)
       

        
        Removidos:

        Nenhum
         Notas:

        Atualização feita para aqueles que pediram muito sistema de música nela. 

        Agora sim podemos chamar ela te uma bot multifuncional

        Fique de olho no chat para saber de todas atualizações
        `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/842182536200192050/851702489404538920/Log.png`)
        
    message.channel.send(embed)
}}