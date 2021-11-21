const Discord = require("discord.js");

module.exports = {

  name:"clear",
  category:"Moderação",
  aliases: [''],

async run(client, message, args) {


  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.channel.send(
      "<:r_nao_IDP_10K:885644800576069662> Coloque um número de **1-99** Mensagens que serão Excluidas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`<:R_certorosaTKF:885653956125159475> **${args[0]} Mensagens Deletadas**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`<:r_nao_IDP_10K:885644800576069662> Não foi possível deletar as mensagens devido a: ${error}`)
    );
}}