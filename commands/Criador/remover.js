const Discord = require("discord.js")
const db = require("quick.db")
const ownerID = '839970026740121641';

module.exports.run = async (client, message, args) => {

    console.log(`Comando de removerbot ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let user = message.mentions.users.first() || message.author;
    if (message.author.id !== ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTimestamp()
        .setDescription(":alerta: - Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
    var error17 = new Discord.MessageEmbed().setColor("#ff58c3")
        .setTimestamp()
        .setDescription(':alerta: - Por favor, digite um \`ID\` **válido**.')
        .setColor("#ff58c3")

    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    client.guilds.cache.get(args[0]).leave();
    const embed = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTimestamp()
        .setDescription(`<:R_certorosaTKF:885653956125159475> 
 - Bot foi **removido** do servidor: \`ID\` **[${args[0]}]**`)
    message.reply(embed);
}

exports.help = {
    name: "rb",
    aliases: ["removebot", "removerbot"],
    diretorio: "Owner"
}