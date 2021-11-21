const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "depositar",
aliases: ['dep'],
run: async(client, message, args) => {
    
    let member = db.fetch(`money_${message.author.id}_${message.author.id}`);
    if(member == null) member = 0;


    let banco = db.fetch(`banco_${message.author.id}_${message.author.id}`);
    if(banco == null) banco = 0;

    let embed2 = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("__Depositar__ | Anjinha")
    .setDescription(`<:r_nao_IDP_10K:885644800576069662> \`${message.author.username}\` Coloque o valor do deposito!`)
      .setTimestamp();
  
    if (!args[0]) {
        return message.banana(`${message.author}`, embed2);
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("__Depositar__ | Anjinha")
    .setDescription(`<:r_nao_IDP_10K:885644800576069662> Você não tem AngelsCoins suficientes para depositar!`)
      .setTimestamp();

    if (member < args[0]) {
        return message.banana(`${message.author}`, embed4);
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("__Depositar__ | Anjinha")
    .setDescription(`<:r_nao_IDP_10K:885644800576069662> Você tem que colocar um valor maior que **0** para realizar o deposito!`)
      .setTimestamp();

    if(args[0] < 0) {
        return message.banana(`${message.author}`, embed5);
    };
    let embed6 = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("__Depositar__ | Anjinha")
    .setDescription(`<:r_nao_IDP_10K:885644800576069662> Isto não é um número!`)
      .setTimestamp();

    if (isNaN(args[0])){
        return message.banana(`${message.author}`, embed6);
    };
    let embed7 = new Discord.MessageEmbed()
    .setTitle("__Depositar__ | Anjinha")
    .setColor("#ff58c3")
    .setDescription(`<:R_certorosaTKF:885653956125159475> **Ebaaa, Você acaba de depositar;**\n> <:v_setinharosaTDN:885653700301971457> **${args[0]} AngelsCoins!**`)
      .setTimestamp();

    message.banana(`${message.author}`, embed7);
    db.add(`banco_${message.author.id}_${message.author.id}`, args[0]);
    db.subtract(`money_${message.author.id}_${message.author.id}`, args[0]);
}
}