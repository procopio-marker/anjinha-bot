const db = require("quick.db")
const Discord = require("discord.js")


module.exports = {
  name: "ban",
  aliases: ['banir', 'forceban'],
  run: async(client, message, args) => {
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    
    let adm = new Discord.MessageEmbed()
    .setTitle("**Você não tem permissão!**")
    .setDescription("<:r_nao_IDP_10K:885644800576069662> **Parece que temos um erro!**\n> **Você precisa da permissão de** \`ADMINISTRADOR\` **para usar este comando!**")
    .setFooter("Você não consegue banir!")
    .setColor("#ff58c3")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.banana(adm)
    
    let marca = new Discord.MessageEmbed()
    .setTitle("**Tá mas cadê o membro?**")
    .setDescription("<:r_nao_IDP_10K:885644800576069662> **Parece que temos um erro!**\n> **Você precisa mencionar o usuário que deseja banir!**")
    .setColor("#ff58c3")
    if(!args[0]) return message.banana(marca)
    
    
    let a = new Discord.MessageEmbed()
    .setTitle("**Oque eu te fiz?** 😥")
    .setDescription("<:r_nao_IDP_10K:885644800576069662> **Parece que temos um erro!**\n> **Os que manda mensagem ta sumido né? Achei que você gostasse de mim**")
    .setColor("#ff58c3")
    .setImage(`https://media.discordapp.net/attachments/892523757787308063/897870081219002378/images_1.jpeg`)
    if(membro == client.user.id) return message.banana(a)
    
    
    let semarcar = new Discord.MessageEmbed()
        .setTitle("**Ouxente quer se banir?**")
    .setDescription("<:r_nao_IDP_10K:885644800576069662> **Parece que temos um erro!**\n> **Ei, você quer se banir? ué fofo quer desabafar?**")
    .setColor("#ff58c3")
    if(message.author == membro.id) return message.banana(semarcar)
    
    
    let yes = new Discord.MessageEmbed()
    .setTitle("**Confirmações** <:anjinha_form:886258924184018954>")
    .setDescription("**Você tem certeza que deseja banir este usuário?**")
    .setColor("#ff58c3")
    message.banana(yes).then(msg => {
      msg.react("<:R_certorosaTKF:885653956125159475>")
      
      let filtro1 = (r, u) => r.emoji.name === 'R_certorosaTKF' && u.id === message.author.id;
  
  let coletor = msg.createReactionCollector(filtro1)
    
    
    coletor.on("collect", c => {
      membro.ban()
    let confir = new Discord.MessageEmbed()
    .setTitle("**Usuário Banido!** 😈")
    .setColor("#ff58c3")
    .setThumbnail(message.author.displayAvatarURL({format: "png"}))
    .setDescription(`<:v_setinharosaTDN:885653700301971457>**・Usuário banido: \`${membro.user.username}\`**\n> <:hastag:886246742629167115> **Tag:** \`${membro.user.tag}\`\n> <:v_pontinhorosatdn:885654411244867604> **ID:** \`${membro.id}\`\n<:anjinha_form:886258924184018954> **Staff**\n> <:v_setinharosaTDN:885653700301971457> **Tag:** \`${message.author.tag}\`\n> <:v_pontinhorosatdn:885654411244867604> **ID:** \`${message.author.id}\``)
    message.banana(confir)
  })
  })
  }
}