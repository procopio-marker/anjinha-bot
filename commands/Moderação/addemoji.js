const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `BLACK`;
const cooldowns = {}
const ms = require("ms")

module.exports = {
  name: "addemoji",
  category: "Administrators",
  run: async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 10000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setColor('#000001')
  .setDescription(`<a:errado:853977904722739201> | **Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.banana(aguarde).then(msg=> {
    msg.delete({ timeout: 20000 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.banana(adm)
  }
    
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.banana(`**Você não pode utilizar este comando!**`)
    }
    
    const emoji = args[0];
    if (!emoji) return message.banana(`**Por favor, me envie o emoji.**`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setTitle(`<:R_certorosaTKF:885653956125159475> Emoji adicionado com sucesso.`)
        .setColor("#ff58c3")
        .setFooter(`Emoji Adicionado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setDescription(
          `<:v_pontinhorosatdn:885654411244867604> O Emoji foi adicionado!\n\n> <:v_setinharosaTDN:885653700301971457> Nome : ${name || `${customemoji.name}`}\n\n > <:v_setinharosaTDN:885653700301971457> Visualização : [Clique aqui](${Link})\n\n`
        );

      return message.banana(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.banana(`**Por favor, envie um emoji valido.**`);
      message.banana(
        `**Você pode usar o emoji normal sem adicionar no servidor!**`
      );
    }
  }
};