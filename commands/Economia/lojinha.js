const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "store",
    aliases: ["loja", "lojinha", 'lojin'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {
 

        const member = message.member
        let embed = new Discord.MessageEmbed()
            .setColor("#ff58c3")
            .setTitle(`Lojinha`)
            .setDescription(`**__Bem vindo(a) ${member} a Lojinha da Anjinha!__**\n**Abaixo deixarei algumas informações sobre nossas categorias de itens:**\n\n*Clique em <a:1_:894747314307096657> para ver a prateleira de itens sagrados.\nClique em <a:2_:894747357231599616> para ver os itens utilitários.\nClique em <a:3_:894747484658749500> para ver as funções disponíveis para comprar.\nClique em <a:4_:894747511862992917> para ver as Badge's disponíveis para comprar.\nClique em <:v_setinharosaTDN:885653700301971457> para ver essa mensagem novamente.*`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://discord.gg/HFB8kC6JN2`)
            .setFooter(`Clique no título para acessar o server de suporte.`)  
        message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
            msg.react(`<a:1_:894747314307096657>`).then(() => { //quando reagir o primeiro emoji...
            msg.react(`<a:2_:894747357231599616>`);
            msg.react(`<a:3_:894747484658749500>`);
            msg.react(`<a:4_:894747511862992917>`);
            msg.react(`<:v_setinharosaTDN:885653700301971457>`);
            })


            const info = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `v_setinharosaTDN` && user.id == message.author.id, {time: 60000})

            const diversao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `1_` && user.id == message.author.id, {time: 60000}) 

            const fun = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `2_` && user.id == message.author.id, {time: 60000}) 

            const musica = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `3_` && user.id == message.author.id, {time: 60000}) 

            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `4_` && user.id == message.author.id, {time: 60000})



           info.on(`collect`, r =>{  
                let emtwo = new Discord.MessageEmbed()
        .setColor("#ff58c3")
            .setTitle(`Lojinha`)
            .setDescription(`**__Bem vindo(a) ${member} a Lojinha da Anjinha!__**\n**Abaixo deixarei algumas informações sobre nossas categorias de itens:**\n\n*Clique em <a:1_:894747314307096657> para ver a prateleira de itens sagrados.\nClique em <a:2_:894747357231599616> para ver os itens utilitários.\nClique em <a:3_:894747484658749500> para ver as funções disponíveis para comprar.\nClique em <a:4_:894747511862992917> para ver as Badge's disponíveis para comprar.\nClique em <:v_setinharosaTDN:885653700301971457> para ver essa mensagem novamente.*`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://discord.gg/HFB8kC6JN2`)
            .setFooter(`Clique no título para acessar o server de suporte.`)  
                msg.edit(emtwo)
        r.users.remove(message.author.id) 
            })

            diversao.on(`collect`, r =>{  
                let embed_two = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('Lojinha De Moedas')
                    .setDescription(`**Itens Sagrados**\n*RitAngels: 3.000 AngelsCoins [a!buy RitAngels <valor>]\nAuroAngels: 2.000 AngelsCoins [a!buy AuroAngels <valor>]\nBitAngels: 1.000 AngelsCoins [a!buy BitAngels <valor>]*`)
                msg.edit(embed_two)
        r.users.remove(message.author.id) 
            })

            fun.on(`collect`, r =>{  
                let embd_two = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>')
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription('**Utilitários:**\n*Anel De Noivado:100 RitAngels [#buy anel]')
                msg.edit(embd_two)
        r.users.remove(message.author.id)
            })


            musica.on(`collect`, r =>{ 
                let embed_three = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('Lojinha de funções')
                    .setDescription('**Funções**\n*Programador: 2000 AuroAngels*')
                msg.edit(embed_three)
        r.users.remove(message.author.id) 
            })


            voltar.on(`collect`, r =>{ 
                let embed_five = new Discord.MessageEmbed()
        .setColor("#ff58c3")
            .setTitle('Lojinha de Badges')
            .setDescription('**Badges:**\n*Estrela Vip: <a:estrela_vip:895791951272632390> 20000 BitAngels*')
            
        msg.edit(embed_five)
        r.users.remove(message.author.id)
            })
        })
    }}