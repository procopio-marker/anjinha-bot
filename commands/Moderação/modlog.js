const db = require("quick.db");
const Discord = require('discord.js')

module.exports = {
    name: "modlog",
    aliases: ["logs", "mlog", "mlogs", "modlogs"],
    description: "mod logs do bot",
    run: async(client, message, args) => {

let comosetar = "Para setar quaisquer modlog utilize: a!modlog edit #canal | a!modlog del #canal | a!modlog call #canal";
      
        let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        let author = message.author;
        let err = "mencione um canal válido para eu poder enviar as Log's";
        let msg_error_perm = "Você não possui permissão para utilizar este comando.";
        let msg_error_ferinha_canal = " Você deve escrever \`a!modlog edit/del/call #canal\`";
        let msg_confirmado = "Canal setado";
        let prefix = db.get(`prefix_${message.guild.id}`) || 'a!';

    if(args[0] === "edit"){

        let perm = "**Gerenciar Servidor**";
        let msg_error_perm = `Calma ${author}, você não possui a permissão de: ${perm}`

if (!comosetar) return message.channel.send(`Ei ${author}, ${comosetar}`);

        

        db.set(`Editadas_${message.guild.id}`, canal.id);

        let confirm_pt1 = "O canal";
        let confirm_pt2 = "foi configurado com sucesso.";
        message.channel.send(`✅ ${author} ${confirm_pt1} ${canal} ${confirm_pt2}`)
      }

if(args[0] === "call"){

        let perm = "**Gerenciar Servidor**";
        let msg_error_perm = `Calma ${author}, você não possui a permissão de: ${perm}`

if (!comosetar) return message.channel.send(`Ei ${author}, ${comosetar}`);

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${msg_error_perm}`);
        if (!canal) return message.channel.send(`Cadê o canal? ${author}, ${err}`);

        db.set(`Call_${message.guild.id}`, canal.id);

        let confirm_pt1 = "O canal";
        let confirm_pt2 = "foi configurado com sucesso.";
        message.channel.send(`✅ ${author} ${confirm_pt1} ${canal} ${confirm_pt2}`)
}
      
    if(args[0] === "del"){

        let perm = "**Gerenciar Servidor**";
        let msg_error_perm = ` ${author} Você não possui permissão de ${perm}`

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${msg_error_perm}`);
        if (!canal) return message.channel.send(`Erro! ${author} ${err}`);

        db.set(`Deletada_${message.guild.id}`, canal.id);

        let confirm_pt1 = "O canal";
        let confirm_pt2 = "foi configurado como logs de mensagens deletadas sucesso.";
        message.channel.send(`✅ ${author} ${confirm_pt1} ${canal} ${confirm_pt2}`)
    }
    if(!args[0]){
        let embed = new Discord.MessageEmbed()
            .setTitle('__ModLog__ **|** Anjinha')
            .addField('Para mensagens editadas', `\`Utilize ${prefix}modlog edit #canal\` Para setar um canal de  mensagens editadas`)
            .addField('Para mensagens apagadas', `\`Utilize ${prefix}modlog del canal\` Para setar um canal de mensagens apagadas`)
            .addField('Para mensagens de logcall', `\`Utilize ${prefix}modlog call #canal\` Para setar um canal de mensagens de quem entrou/saiu de uma call`)
            .setColor("ff58c3")
    message.banana(embed)
    }
  }   
  }