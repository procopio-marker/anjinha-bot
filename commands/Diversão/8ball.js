const Discord = require("discord.js")


module.exports = {

    name:"8ball",
    category:"Diversão",
    aliases: [''],
    
 run: async (client, message, args) => {

  
    if(!args[0]) return message.channel.send("Você precisa fazer uma pergunta")
    if(args[0].length < 1) return message.channel.send("Você precisa fazer uma pergunta")


    let i = ["Sim",
    "Não",
    "Talvez",
    "Eu não sei, tente de novo",
    "Quem sabe?",
    "Isso é um mistério",
    "Não posso te contar",
    "Meu informante disse que não",
    "Provavelmente",
    "Me pergunte mais tarde!",
    "Claro que não!",
    "Não conte comigo para isso",
    "Dúvido muito",
    "NUNCA",
    "Mais e Claro",
    "Certeza Que Sim",
    "COM CERTEZA"]

    let y = i[Math.floor(i.length * Math.random())]


    message.banana(`${y}`)
 }
}