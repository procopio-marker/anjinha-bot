const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "config-registro",
    aliases: ["configurar-registro", "registro"],
    description: "Exibe o menu de configuração do Bot",
    run: async(client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.banana(`<:r_nao_IDP_10K:885644800576069662> **|** ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);

const embed = new Discord.MessageEmbed()
.setTitle(`<:anjinha_config:886246600693932062> Painel De Registro - Config | ${message.guild.name}`)
.setColor("ff58c3")
.setDescription(`
ㅤ
 <:v_pontinhorosatdn:885654411244867604> **Como configurar vc vai digitar o comando: \`a!config-registro <nome da cartegoria tipo masculino + @cargo ou id do cargo>\`**

ㅤㅤㅤㅤㅤㅤ**Aqui estão as cartegoria:**ㅤㅤㅤㅤㅤㅤ
<:v_setinharosaTDN:885653700301971457> **Cargo Masculino** = \`a!config-registro masculino <@cargo>\`
<:v_setinharosaTDN:885653700301971457> **Cargo Feminino** = \`a!config-registro feminino <@cargo>\`
<:v_setinharosaTDN:885653700301971457> **Cargo Não Binario** = \`a!config-registro naobinario <@cargo>\`

<:v_setinharosaTDN:885653700301971457> **Cargo Mais 18** = \`a!config-registro mais18 <@cargo>\`
<:v_setinharosaTDN:885653700301971457> **Cargo Menos 18** = \`a!config-registro menos18 <@cargo>\`

<:v_setinharosaTDN:885653700301971457> **Cargo Hetero** = \`a!config-registro hetero <@cargo>\`
<:v_setinharosaTDN:885653700301971457> **Cargo LGBT** = \`a!config-registro lgbt <@cargo>\`

<:v_setinharosaTDN:885653700301971457> **Cargo Registrado** = \`a!config-registro registrado <@cargo>\`
<:v_setinharosaTDN:885653700301971457> **Cargo Não Registrado** = \`a!config-registro naoregistrado <@cargo>\`

<:v_setinharosaTDN:885653700301971457> **Canal de logs** = \`a!config-registro logs <#canal>\`
<:v_setinharosaTDN:885653700301971457> **Cargo de Equipe de Registro** = \`a!config-registro equipe <@cargo>\`

<:v_setinharosaTDN:885653700301971457> **resetar todas as config do registros** = \`a!config-registro reset\`
`)
if(!args[0]) return message.banana(embed);

        if (args[0] === 'masculino') {

            let cargo_masculino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_masculino) return message.banana(`<:r_nao_IDP_10K:885644800576069662> | ${message.author} Você deve escrever com \`a!config-registro masculino @cargo-masculino\`.`);
            db.set(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo masculino setado para <@&${cargo_masculino_config}> com sucesso.`)
        }
        if (args[0] === 'feminino') {

            let cargo_feminino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_feminino) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro feminino @cargo-feminino\`.`);
            db.set(`registro_feminino_${message.guild.id}`, cargo_feminino.id);

            let cargo_feminino_config = db.get(`registro_feminino_${message.guild.id}`, cargo_feminino.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo feminino setado para <@&${cargo_feminino_config}> com sucesso.`)
        }
        if (args[0] === 'naobinario') {

            let cargo_naobinario = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naobinario) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro naobinario @cargo-naobinario\`.`);
            db.set(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo naobinario setado para <@&${cargo_naobinario_config}> com sucesso.`)
        }


        if (args[0] === 'mais18') {

            let cargo_mais18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_mais18) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro mais18 @cargo-mais18\`.`);
            db.set(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo mais18 setado para <@&${cargo_mais18_config}> com sucesso.`)
        }
        if (args[0] === 'menos18') {

            let cargo_menos18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_menos18) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro menos18 @cargo-menos18\`.`);
            db.set(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo menos18 setado para <@&${cargo_menos18_config}> com sucesso.`)
        }


        if (args[0] === 'hetero') {

            let cargo_hetero = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_hetero) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro hetero @cargo-hetero\`.`);
            db.set(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo hetero setado para <@&${cargo_hetero_config}> com sucesso.`)
        }
        if (args[0] === 'lgbt') {

            let cargo_lgbt = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_lgbt) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro lgbt @cargo-lgbt\`.`);
            db.set(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo lgbt setado para <@&${cargo_lgbt_config}> com sucesso.`)
        }


        if (args[0] === 'registrado') {

            let cargo_registrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_registrado) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro registrado @cargo-registrado\`.`);
            db.set(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo registrado setado para <@&${cargo_registrado_config}> com sucesso.`)
        }
        if (args[0] === 'naoregistrado') {

            let cargo_naoregistrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naoregistrado) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro naoregistrado @cargo-naoregistrado\`.`);
            db.set(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo naoregistrado setado para <@&${cargo_naoregistrado_config}> com sucesso.`)
        }


        if (args[0] === 'logs') {

            let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
            if(!cargo_logs) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro logs #canal-logs\`.`);
            db.set(`registro_logs_${message.guild.id}`, cargo_logs.id);

            let cargo_logs_config = db.get(`registro_logs_${message.guild.id}`, cargo_logs.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} canal de logs setado para <#${cargo_logs_config}> com sucesso.`)
        }
        if (args[0] === 'equipe') {

            let cargo_equipe = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_equipe) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`a!config-registro equipe @cargo-equipe\`.`);
            db.set(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            let cargo_equipe_config = db.get(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            message.channel.send(`<:R_certorosaTKF:885653956125159475> | ${message.author} cargo equipe setado para <@&${cargo_equipe_config}> com sucesso.`)
        }

        if (args[0] === 'reset') {
			  db.delete(`registro_masculino_${message.guild.id}`);
              db.delete(`registro_feminino_${message.guild.id}`);
			  db.delete(`registro_naobinario_${message.guild.id}`);
			  db.delete(`registro_mais18_${message.guild.id}`);
			  db.delete(`registro_menos18_${message.guild.id}`);
			  db.delete(`registro_hetero_${message.guild.id}`);
			  db.delete(`registro_lgbt_${message.guild.id}`);
			  db.delete(`registro_equipe_${message.guild.id}`);
			  db.delete(`registro_naoregistrado_${message.guild.id}`);
			  db.delete(`registro_registrado_${message.guild.id}`);
			  
            message.banana(`<:R_certorosaTKF:885653956125159475> | ${message.author} resetado com sucesso.`)
        }
    }}