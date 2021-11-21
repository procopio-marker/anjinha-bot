const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    let user = message.author;
      
          let member = db.fetch(`box_${user.id}`);
    if(member == null) member = 0;

    let box = db.fetch(`box_${user.id}`);
    if(box == null) box = 0;
 
    let embed2 = new Discord.MessageEmbed()


 .setDescription( `Abra suas caixas coletadas!
 
 Como usar?
 \`a!abrircaixa <quantidade>\`


 Lembrando que não dá para abrir uma caixa sem ter uma!

 Você tem ${box} caixa(s)!
 `)
 .setColor("ff58c3")
 .setFooter(`Oque será que tem nessas caixas?`)
 .setThumbnail(`${message.author.displayAvatarURL()}`)
 .setTimestamp();
 
    if (!args[0]) {
        return message.banana(`${message.author}`, embed2);
    };
    
    

    if (member < args[0]) {
        return message.channel.send(`${message.author}`, embed2);
    };
 
    

    if(args[0] < 0) {
        return message.channel.send(`${message.author}`, embed2);
    };
 

    if (isNaN(args[0])){
        return message.channel.send(`${message.author}`, embed2);
    };
    let amount = Math.floor(Math.random() * 10000) + 1000;
   
   
    let embed7 = new Discord.MessageEmbed()
    .setTitle("🎉 Você abriu sua caixa!")
    .setDescription(`📦 Na caixa tinha:
    AngelsCoins: \`${amount}\`

    Agora você possui ${box} caixas!
    
    `)
    .setColor("ff58c3")
    .setFooter(`Nossa, queria eu 😥`)
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .setTimestamp();
 
    message.banana(`${message.author}`, embed7);
    db.add(`money_${message.author.id}`, amount);
    db.subtract(`box_${user.id}`, 1)


}