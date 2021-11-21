require('./banana.js')
const express = require('express');
const app = express();
const db = require('quick.db');
const fs = require('fs');
const bplHelper = require('bpl-helper');
const helper = new bplHelper(`788146515386040331`);
const discord = require('discord.js');
app.get('a!', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require('discord.js'); //Conexão com a livraria Discord.js

const client = new Discord.Client();({
    disableEveryone: true,
    restTimeOffset: 0
}) //Criação de um novo Client
client.queue = new Map()
client.vote = new Map()
client.playing = {};
client.dispatcher = {};
client.loop = {};
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos


const DiscordButtons = require("discord-buttons");
DiscordButtons(client);

/*client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//puxando a pasta comands + o comando
    commandFile.run(client, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:anjinha_form:886258924184018954> Olá ${message.author.username}, algo deu errado;`)
.setColor("#ff58c3")
.setDescription(`<:v_pontinhorosatdn:885654411244867604> O Comando **a!${command}** não foi encontrado.\n<:v_pontinhorosatdn:885654411244867604> Utilize **"a!help/ajuda"** para obter ajuda.
`)
.setFooter(`Caso tenha dúvidas entre no meu server de suporte usando a!suporte`)
    return message.banana(embed);
  }
});*/

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});

client.on('message', message => {
   let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;     
  
       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });

client.on("message", async message => {

let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**. Respeite o modo baiano dele😡`).then(i => i.delete({timeout: 10000}));
    }
  }
  
  if (authorStatus) {
    message.channel.send(`**${message.author.tag}** Oieee, bem vindo de volta. Seu afk foi bom? Porque pelo que eu vi foi ótimo`).then(i => i.delete({timeout: 10000}));
    afk.delete(message.author.id)
  }
})


client.on('guildMemberAdd', member => {
  let channelID = db.get(`${member.guild.id}_channelID`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg`)
  let img = db.get(`${member.guild.id}_gif`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("ff58c3")
      .setTitle(`Mensagem do sistema, mude usando a!setmessage`)
      .setDescription(`Olá ${member}, Seja Bem vindo(a) ${member.guild.name} agora temos ${member.guild.members.cache.size} de membros! Leia as Regras e Se divirta!`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("ff58c3")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})







client.on('guildCreate', (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => {
        if(
            channel.type === "text" &&
            !channeltoSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) channeltoSend = channel;
    });

    if(!channeltoSend) return;

    let channelEmbed = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription("Oieeeee, muito obrigada por me adicionar em seu servidor\nPrazer sou a Anjinha™ e estou aqui para gerenciar seu servidor e alegrar seus membros!\nPara ver minha central de ajuda digite **[a!ajuda/help]**")
    .addFields(
        {
            name: `**Meu servidor de suporte;**`,
            value: "https://discord.gg/HFB8kC6JN2"
        },
        {
            name: "**Me Adicione;**",
            value: "https://discord.com/oauth2/authorize?client_id=897836736711905311&scope=bot&permissions=8589934583"
        },
        {
            name: "**Vote em mim.**",
            value: `https://bluephoenixlist.xyz/bot/788146515386040331`
        }
    )
    .setFooter(`Agora estou em: ${client.guilds.cache.size} servidores`, guild.iconURL({dynamic: true}))
    .setTimestamp();
    channeltoSend.send(channelEmbed).catch(e => {
        if(e) {
            return;
        }
    })
})



helper.on("ready", async (socket) => {
  console.log("Oiee loguei na Blue Phoenix!");
});

helper.on("vote", data => {
let quantia = Math.floor(Math.random() * 2000)
db.add(`money_${data.user.id}`, quantia)


let canal = client.channels.cache.get("886307694498160661")

const embed = new Discord.MessageEmbed()
.setTitle(`<:emoji_coracaorosa:885848380813754439> Ebaaaa votaram em mim`)
.setDescription(`<a:m_pink_coroa_LHS:885999844848730122> O fofx **${data.user.username}** acabou de votar em mim e agora eu tenho **${data.bot.votos} votos** e como recompensa recebeu <:w_luarosa:886006843749593170> de badge no a!perfil, Olha pvzin que tem uma surpresinha de AngelsCoins

<:v_pontinhorosatdn:885654411244867604> Você também pode votar em mim clicando **[Aqui](https://bluephoenixlist.xyz/bot/788146515386040331)**`)

db.set(`badge_${data.user.id}`, '<:w_luarosa:886006843749593170>')

canal.send(embed) 

db.add(`money_${data.user.id}`, quantia)
})










client.on("guildMemberAdd", async(member) => {
let role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
if(role) {
  member.roles.add(role.id)
} else {
  return;
}
});

client.on('guildCreate', function(guild) {
    var channel = client.channels.cache.get('870421077069819944');
    var owner = guild.owner;

    const msg = new Discord.MessageEmbed()
        .setColor('#ff58c3')

        .setTitle(`<:w_luarosa:886006843749593170>  | Fui adicionada em um novo servidor!`)

        .addField(`<a:w_florzinha:886244129326129162>  Nome do servidor:`, `\`${guild.name}\``, false)

        .addField(`<:anjinha_form:886258924184018954> Id do servidor`, `\`${guild.id}\``, false)

        .addField(`<:user:886246907356274701>  Quantidade de membros:`, `\`${guild.memberCount}\``, false)

        .addField(`<a:m_pink_coroa_LHS:885999844848730122>  Dono:`, `\`${guild.owner.user.tag}\``, false)

        .addField(`<:hastag:886246742629167115>  Total De Canais:`, `\`${guild.channels.cache.size}\``, false)

        .addField(`<:w_mundinho:886244016553881600>  Total de servidores agora:`, `\`${client.guilds.cache.size}\``, false)

        .setTimestamp();

    channel.send(msg);
});


client.on("message", async message => {

  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days.toFixed()}d, ${hours.toFixed()}h, ${minutes.toFixed()}m, ${seconds.toFixed()}s`;
   
 

  
  if (message.content.startsWith('<@!897836736711905311>') || message.content.startsWith('<@897836736711905311>')) {
    let embed = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setDescription(` <:v_setinharosaTDN:885653700301971457>Olá ${message.author.username}, prazer me chamo **Anjinha™** sou uma **BOT** para diversas funções que possam lhe ajudar no seu cotidiano, como, **diversão; moderação; utilidades __&__ muito mais.**
> <:anjinha_config:886246600693932062> **Informações;**
> <:v_pontinhorosatdn:885654411244867604>Prefix: **[a!],**
> <:v_pontinhorosatdn:885654411244867604>Online á **[${uptime}],**
> <:v_pontinhorosatdn:885654411244867604>Estou em: **[${client.guilds.cache.size}] servidores,**
> <:v_pontinhorosatdn:885654411244867604>Central de comandos **[a!help/ajuda].**`)
if (message.author.bot) return;
    message.banana(embed);
  }
});








client.on("messageUpdate", function(oldMessage, newMessage){
      let canal = oldMessage.guild.channels.cache.get(db.get(`Editadas_${oldMessage.guild.id}`))
      let avatar = oldMessage.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
      if(canal) {
    if(oldMessage.author.bot)
    {
    }
    else
    {
    const messagelog = new Discord.MessageEmbed()
    .setTitle('<:anjinha_config:886246600693932062> __Sistema De Log__ | Anjinha')
    .setThumbnail(avatar)
    .setDescription(`> ** <:hastag:886246742629167115>・Canal da Mensagem:** <#${oldMessage.channel.id}>\n> **<:user:886246907356274701>・Author da Mensagem:** <@${oldMessage.author.id}>`)
    .addField(`> <:v_setinharosaTDN:885653700301971457>  Mensagem antiga!`, `\`\`\`
    ${oldMessage}\`\`\`
    `, false)
    .addField(`> <:v_setinharosaTDN:885653700301971457>  Mensagem Nova!`, `\`\`\`
    ${newMessage}\`\`\``, false)
    .setFooter(`ID do usuario: ${oldMessage.author.id}`)
    .setColor("#ff58c3")
    canal.send(messagelog)
    }
  }
});

client.on("messageDelete", function(oldMessage, newMessage){
      let canal = oldMessage.guild.channels.cache.get(db.get(`Deletada_${oldMessage.guild.id}`))
      let avatar = oldMessage.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
      if(canal) {
    if(oldMessage.author.bot)
    {
    }
    else
    {
    const messagelog = new Discord.MessageEmbed()
    .setTitle('<:anjinha_config:886246600693932062> __Sistema De Log__ | Anjinha')
    .setThumbnail(avatar)
    .setDescription(`> ** <:hastag:886246742629167115>・Canal da Mensagem:** <#${oldMessage.channel.id}>\n> **<:user:886246907356274701>・Author da Mensagem:** <@${oldMessage.author.id}>`)
    .addField(`> <:v_setinharosaTDN:885653700301971457>  Mensagem:`, `\`\`\`
    ${oldMessage}\`\`\`
    `, false)
    .setFooter(`ID do usuario: ${oldMessage.author.id}`)
    .setColor("#ff58c3")
    canal.send(messagelog)
    }
  }
});

client.on("voiceStateUpdate", async (oldState, newState) => {
    const user = await client.users.fetch(newState.id);
    const { guild } = oldState
    const icon = oldState.guild.iconURL()
    let channel = guild.channels.cache.get(db.get(`Call_${oldState.guild.id}`))
    let avatar = user.avatarURL({ dynamic: true, format: "gif", size: 1024 });
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    if(channel){
      if (!oldState.channel && newState.channel)
      {
        const entrou = new Discord.MessageEmbed()
          .setThumbnail(icon)
          .setAuthor(`${user.username}`, avatar)
          .setTitle("Entrou em um canal de voz")
          .setDescription('Alguém entrou em um canal de voz')
          .addField("Canal:", `${newState.channel.name}`, false)
          .addField("Usuario:", `Nome: ${user.tag}`, false)
          .setFooter(`ID do usuario: ${user.id}`)
          .setColor("ff58c3")
          .setTimestamp();
        channel.send(entrou)
      }
      else if (!newState.channel)
      {
        const saiu = new Discord.MessageEmbed()
          .setThumbnail(icon)
          .setAuthor(`${user.username}`, avatar)
          .setTitle("Saiu de um canal de voz")
          .setDescription('Alguém saiu de um canal de voz')
          .addField("Canal:", `${oldState.channel.name}`, false)
          .addField("Usuario:", `Nome: ${user.tag}`, false)
          .setFooter(`ID do usuario: ${user.id}`)
          .setColor("ff58c3")
          .setTimestamp();
        channel.send(saiu)
      }
    }
    });



client.on("ready", () => {
  function abbreviateNumber(number, precision=2) {
  const suffsFromZeros = { 0:'', 3:'k', 6:'M', 9:'G', 12:'T' }
  const { length } = number.toString()
  const lengthThird = length%3
  const divDigits = length-(lengthThird || lengthThird+3)
  const calc = ''+(number/(10**divDigits)).toFixed(precision)

  return number < 1000 ? ''+number : (calc.indexOf('.') === calc.length-3 ? calc.replace(/\.00/, '') : calc)+suffsFromZeros[divDigits]
}

  let activities = [
      `😇 [${client.guilds.cache.size}] Servers | [${abbreviateNumber(client.users.cache.size)}] Users`
      
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Iniciado com sucesso!")
});

client.login('ODk3ODM2NzM2NzExOTA1MzEx.YWbdnw.6gbkeMRFlbrRs-xDHc5ISt3mSa8');
