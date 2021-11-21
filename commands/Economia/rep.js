const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "config",
    aliases: ["configurar", "configuraçao", "configuração", "menuconfig"],
    description: "Exibe o menu de configuração do Bot",
    run: async(client, message, args) => {

    let user = message.mentions.users.first();

    if (!user) {
        const embed11 = new Discord.MessageEmbed()
        .setDescription(`Mencione alguem para dar reps`)
        return message.channel.send(`${message.author}`, embed11);
      }

    db.add(`reps_${message.author.id}`, args[1]);
    let bal = await db.fetch(`reps_${message.author.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setDescription(`Você deu **${args[1]}** para ${user} \n Agora ele possui **${bal}** Reps`)
    message.channel.send(`${message.author}`, moneyEmbed);
}
}
