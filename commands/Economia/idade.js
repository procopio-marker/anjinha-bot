const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
      run: async (client, message, args) => {

const idade = args.join();
const user = message.author;

if(isNaN(idade[0])){
    return message.channel.send(`❌ | ${user} Sintaxe incorreta, utilize: \`a!idade [Número].\``);
 };

if (!idade) return message.reply(`❌ | ${user} Sintaxe incorreta, utilize: \a!idade [Número].\``);

db.set(`idade_${user.id}`, idade);

return message.reply('Idade, alterada com sucesso');
      }
}