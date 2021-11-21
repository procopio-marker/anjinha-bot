const jimp = require("jimp");

const Discord = require('discord.js');

const cooldowns = {}
const ms = require("ms")

exports.run = async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 100
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('<:r_nao_IDP_10K:885644800576069662> **|  Muita calma nessa hora, amigo!**')
  .setColor('#ff58c3')
  .setDescription(`**<:negado:879264424211402752> **| ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(`<:r_nao_IDP_10K:885644800576069662> **| ${message.author}Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 100 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://i.pinimg.com/236x/25/2a/04/252a045199e33164a8b7577fc001851a.jpg")
        if (!args[0]) return message.channel.send(`<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , escreva algo pra bob queimar!**`)
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(700, 800)
                                           image.print(font, 80, 200, args.join(" "), 518)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.banana({files: [{ attachment: i, name: "bobfogueira.png"}]})
                })
            })
        })
    }