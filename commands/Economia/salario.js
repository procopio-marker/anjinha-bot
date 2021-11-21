const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports.run = async (client, message, args) => {
    
    let user = message.author;

    let timeout = 604800000;

    let salario = await db.fetch(`salario_${message.guild.id}_${user.id}`);
    
    let amount = Math.floor(Math.random() * 8000) + 1000;
    
    if (salario !== null && timeout - (Date.now() - salario) > 0) {
        let time = ms(timeout - (Date.now() - salario));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`<:r_nao_IDP_10K:885644800576069662> **|** Você já recebeu seu salário!\n\nColete novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
            
        message.channel.send(`${user}`, timeEmbed);

    } else {
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle("Anjinha **|** Salário")
        .setColor("#ff58c3")
        .setDescription(`Você coletou seu salário!\n\nForam Coletados: **\`${amount} AngelsCoins\`**`);
        
        message.channel.send(`${user}`, moneyEmbed);
        db.add(`dinheiro_${message.guild.id}_${user.id}`, amount);
        db.set(`salario_${message.guild.id}_${user.id}`, Date.now());
    }
}