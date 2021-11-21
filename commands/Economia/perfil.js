/*const Discord = require('discord.js');
const db = require('quick.db');

const flags = {
	DISCORD_EMPLOYEE: '<:discordemployee:894566661800198144>',
	DISCORD_PARTNER: '<:discordpartner:894566770386546729>',
	BUGHUNTER_LEVEL_1: '<:discordbughunterlv1:894566536596045824>',
	BUGHUNTER_LEVEL_2: '<:discordbughunterlv2:894566564668522537>',
	HYPESQUAD_EVENTS: '<:discordhypesquad:894566694998147092>',
	HOUSE_BRAVERY: '<:discordbravery:894566476487458856>',
	HOUSE_BRILLIANCE: '<:discordbrillance:894566505155526677>',
	HOUSE_BALANCE: '<:discordbalance:894566449253871657>',
	EARLY_SUPPORTER: '<:discordearlysupporter:894566591113592842>',
	TEAM_USER: 'Team User (Fazendo a badge)',
	SYSTEM: 'Sistema (Fazendo a badge)',
	VERIFIED_BOT: '<:BotCheck:894582983510593576>',
	VERIFIED_DEVELOPER: '<:developerbadge:894566421726638090>',
  MODERATOR: '<:blurplecertifiedmoderator:894568949587537960>',
  DISCORD_NITRO: 'Nitro (Fazendo a badge)'
};


module.exports = {
    name: "perfil",
    aliases: ["profile"],
    description: "comando para tocar música",
    run: async(client, message, args) => { 


  

  let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
  if (prefixo_fera === null) prefixo_fera = 'a!';

        let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const userFlags = user.user.flags.toArray();


          let badge = await db.fetch(`badge_${user.id}`);


        let sobremim = await db.fetch(`sobremim_${user.id}`);
if (sobremim == null) sobremim = `Anjinha a bot mais fofa do Discord (Você pode alterar isso usando a!sobremim)!`;

let idade = await db.fetch(`idade_${user.id}`);
if (idade == null) idade = `18y (Você pode alterar isso usando a!idade)!`;


let money = db.fetch(`money_${message.author.id}_${user.id}`)
if(money === null) money = 0;

let banco = db.fetch(`banco_${message.author.id}_${user.id}`)
if(banco === null) banco = 0;


        let premium = await db.fetch(`premium_${user.id}`);

        let criador = await db.fetch(`criador_${user.id}`);

        let emprego = await db.fetch(`emprego_${user.id}`);

        let marry = await db.fetch(`marry_${user.id}`)
  if (marry === null) marry = `Este usuário está solteiro (a)`;

        //sobremim

        let xpzin = await db.fetch(`xp_${user.id}`);

        let casado = db.fetch(`casado_${user.id}`)

        if(sobremim === null) sobremim = `use ${prefixo_fera}sobremim , para personalizar.`
        if(banco === null) banco = 0
        if(money === null) money = 0
        if(xpzin === null) xpzin = 0
        if (emprego == null) emprego = `Você não possuí um emprego, use a!emprego para pegar um`
        if(premium === null) premium = ``
        if(criador === null) criador = ``
        if(casado ===null) casado = ``
        if(badge ===null) badge = ``

        const embed = new Discord.MessageEmbed()
            .setTitle(`Perfil de ${user.user.username}`)
            .setColor(`#ff58c3`)
            .setFooter('Perfil beta em desenvolvimento')
            .setDescription(`> Emblemas: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : ''} ${criador} ${casado} ${premium} ${badge}\n> AngelsCoins em mãos:** ${money}$**\n> AngelsCoins no Cofre: **${banco}$**\n> Idade: **${idade}**\n> Sobre mim: **${sobremim}**\n> Emprego: ${emprego}\n> Casado com: ${marry}`)
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            

        await message.banana(`${message.author}`, embed)
    }}*/ 


const discord = require('discord.js')
const canvas = require('canvas')
const db = require("quick.db")

module.exports = {
  name: "perfil",
  aliases: ["profile"],
  description: "comando para tocar música",
  run: async(client, message, args) => { 
    
        const canvas = Canvas.createCanvas(850, 550)
        const ctx = canvas.getContext("2d")


        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
   

    let sobmim = db.get(`sobremim_${user.id}`)
    if(!sobmim) sobmim = "Anjinha é fofa(você pode alterar isto usando a!sobremim)"

    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024});

    const fundo = await
    Canvas.loadImage("https://th.bing.com/th/id/OIP.KmK7mXQ7M3DqO4ZP5BbECwHaEK?pid=ImgDet&rs=1")
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height)

    const layout = await
    canvas.loadImage("https://i.imguer.co/fZt5chE.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)


ctx.font = '30px helsink'
ctx.fillStyle = '#F8F8F8'
ctx.fillText(`${user.username}`, 340, 73)

ctx.font = '25px helsink'
ctx.fillStyle = '#F8F8F8'
ctx.fillText(`${sobmim}`, 20, 500)

ctx.beginPath();
ctx.arc(723, 108, 94, 0, Math.PI *2, true);
ctx.closePath();
ctx.clip();

const TargetAvatar = await Canvas.loadImage(`${avatar}`)
ctx.drawImage(TargetAvatar, 628, 12, 193, 193)

const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'perfil.png')
return message.banana(`${message.author}`, attachment)
}}