const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "config",
    aliases: ["configurar", "configuraçao", "configuração", "menuconfig"],
    description: "Exibe o menu de configuração do Bot",
    run: async(client, message, args) => {
    const prefix = db.get(`prefix_${message.guild.id}`) || "a!"
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.banana(`Você não pode usar esse comando.`)

    let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
    const { guild } = message
    const icon = guild.iconURL()
    const pag1 = new Discord.MessageEmbed()
      .setColor("#ff58c3")
      .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
      .setThumbnail(avatar)
      .setDescription(`**Configurações**\n> Para poder configurar você devera utilizar da forma que está ao lado. Exemplo: a!setwelcome #chat-geral\n
      > Welcome
      <a:1_:894747314307096657> <:v_setinharosaTDN:885653700301971457> Canal para enviar a mensagem - **a!setwelcome**
      <a:2_:894747357231599616> <:v_setinharosaTDN:885653700301971457> Mensagem De Boas Vindas - **a!setmessage** (**OBS: Caso não determine, irei mandar uma mensagem do meu sistema**)\n
      > Gerenciamento
      <a:3_:894747484658749500> <:v_setinharosaTDN:885653700301971457> Log - **a!modlog**
      <a:4_:894747511862992917> <:v_setinharosaTDN:885653700301971457> Punições - **Em desenvolvimento**
      <a:5_:894747535795691521> <:v_setinharosaTDN:885653700301971457> AutoRole - **a!autorole**\n
      > Registro
      <a:6_:894747601293946900> <:v_setinharosaTDN:885653700301971457> Configure o sistema - **a!config-registro**, Após configurar use \`a!registrar\`

      `)
      .setTimestamp()
      .setFooter(`Autor do comando: ${message.author.tag}`, message.author.displayAvatarURL({ Size: 32 }))

    message.banana(pag1)
}
}
