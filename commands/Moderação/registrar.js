const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "registrar",
    aliases: ["r", "register"],
    description: "Exibe o menu de configuração do Bot",
    run: async(client, message, args) => {

      let user = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;


      
      let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`);
    let cargo_feminino_config = db.get(`registro_feminino_${message.guild.id}`);
    let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`);
    let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`);
    let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`);
    let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`);
    let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`);
    let cargo_equiperegistro_config = db.get(`registro_equipe_${message.guild.id}`);
    let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`);
    let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`);

if(cargo_equiperegistro_config === null) return message.banana(`<:r_nao_IDP_10K:885644800576069662> **|** O Sistema de registro não foi configurado, use \`a!config-registro\` para configurar meu sistema <:notify_cleosan:885529741313069087>`);

  let registro = {
    equiperegistro: cargo_equiperegistro_config,
    naoregistrado: cargo_naoregistrado_config,
    registrado: cargo_registrado_config,
    masculino: cargo_masculino_config,
    feminino: cargo_feminino_config,
    naobinario: cargo_naobinario_config,
    mais18: cargo_mais18_config,
    menos18: cargo_menos18_config,
    hetero: cargo_hetero_config,
    lgbt: cargo_lgbt_config,
  };
 
  let page = 1;
  let pages = new Array();
 
  if (!message.member.roles.cache.has(registro.equiperegistro)) return message.channel.send(`<:r_nao_IDP_10K:885644800576069662> | ${message.author} Você não é da esquipe de registro!`);
  message.delete();
  let cargos = [];
  let pv = [];
  let masculino = message.guild.roles.cache.get(registro.masculino)
  let feminino = message.guild.roles.cache.get(registro.feminino)
  let naobinario = message.guild.roles.cache.get(registro.naobinario)
  let menos18 = message.guild.roles.cache.get(registro.menos18)
  let mais18 = message.guild.roles.cache.get(registro.mais18)
  let hetero = message.guild.roles.cache.get(registro.hetero)
  let lgbt = message.guild.roles.cache.get(registro.lgbt)
  let userReg = message.mentions.users.first();
  let member = message.guild.member(userReg);
  if (!userReg) return message.channel.send(`<:r_nao_IDP_10K:885644800576069662> | ${message.author} Mencione um usuário para registrar!`);
 //ferinha
  pages.push({
    description: `**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n\n` +
      `**<:v_pontinhorosatdn:885654411244867604> Qual sua sexualidade?**\n<a:1_:894747314307096657> ${masculino}\n<a:2_:894747357231599616> ${feminino}\n<a:3_:894747484658749500> ${naobinario}\n\n`,
    cargos: [
      masculino,
      feminino,
      naobinario
    ]
  });
  pages.push({
    description: `**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n\n` +
      `**<:v_pontinhorosatdn:885654411244867604> Qual sua idade?**\n<a:1_:894747314307096657> ${menos18}\n<a:2_:894747357231599616> ${mais18}\n\n`,
    cargos: [
      menos18,
      mais18
    ]
  });
  pages.push({
    description: `**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n\n` +
      `**<:v_pontinhorosatdn:885654411244867604> Qual o seu gênero?**\n<a:1_:894747314307096657> ${hetero}\n<a:2_:894747357231599616> ${lgbt}\n\n`,
    cargos: [
      hetero,
      lgbt
    ]
  });
 //ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha//ferinha
  const embed = new Discord.MessageEmbed()
    .setColor('ff58c3')
    .setDescription(pages[page - 1].description)
    .setFooter('Registro | Anjinha™');
 
  const embedUser = new Discord.MessageEmbed()
    .setTitle('<:anjinha_form:886258924184018954> Ebaaa você foi registrado!')
    .setColor("ff58c3")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n\n`+
      `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
    .setFooter(`ID: \`${userReg.id}\``)
    .setTimestamp();
 
  const embedFinish = new Discord.MessageEmbed()
    .setTitle('<:R_certorosaTKF:885653956125159475> Registro efetuado!')
    .setDescription(`**<:v_setinharosaTDN:885653700301971457>  Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457>  Registrado:** ${userReg}\n\n` +
      `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
    .setColor("ff58c3")
    .setThumbnail(userReg.displayAvatarURL())
    .setFooter('Registro efetuado com sucesso | ' + message.guild.name)
 
  message.channel.send(embed).then(msg =>
    msg.react('894747314307096657').then(r => {
      msg.react('894747357231599616');
      msg.react('894747484658749500');
      msg.react('<:v_setinharosaTDN:885653700301971457>');
 
      const oneFilter = (reaction, user) => reaction.emoji.name === '1_' && user.id === message.author.id;
      const twoFilter = (reaction, user) => reaction.emoji.name === '2_' && user.id === message.author.id;
      const threeFilter = (reaction, user) => reaction.emoji.name === '3️_' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === 'v_setinharosaTDN' && user.id === message.author.id;
 
      const one = msg.createReactionCollector(oneFilter, { time: 60000 });
      const two = msg.createReactionCollector(twoFilter, { time: 60000 });
      const three = msg.createReactionCollector(threeFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
 //ferinha//ferinha kkkjkjkj sla :>
      one.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[0]);
        cargos.push(pages[page - 1].cargos[0]);
        pv.push(pages[page - 1].cargos[0].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      two.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[1]);
        cargos.push(pages[page - 1].cargos[1]);
        pv.push(pages[page - 1].cargos[1].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      three.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[2]);
        cargos.push(pages[page - 1].cargos[2]);
        pv.push(pages[page - 1].cargos[2].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      forwards.on('collect', async (r, user) => {
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**<:v_setinharosaTDN:885653700301971457> Registrador:** ${message.author}\n**<:v_setinharosaTDN:885653700301971457> Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:v_pontinhorosatdn:885654411244867604> Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
    })
  );
              }}