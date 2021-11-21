const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
    if (!["839970026740121641", "765411087184297994"].includes(message.author.id)) { //Apenas usuarios que forem adicionados poderão utiliar o comando
    return message.channel.send(`Ops, apenas meus devs podem utilizar este comando!`);
  }

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(`🚫 **|** ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(`🚫 **|** ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`money_${message.author.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`money_${message.author.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("Anjinha **|** Alteração Monetária")
    .setColor("#ff58c3")
    .setDescription(`Foi adicionado **${args[1]} AngelsCoins** para ${user}!\n\n AngelsCoins atualmente: **${bal}**`)
    .setFooter(`AngelsCoins Adicionado com sucesso`);
    message.channel.send(moneyEmbed);
}