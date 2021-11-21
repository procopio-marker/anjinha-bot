const axios = require('axios');
const { MessageEmbed } = require('discord.js');


module.exports = {

    name:"cafuné",
    category:"Diversão",
    aliases: ['pat'],
  
    run: async (client, message, args) => {

        
        const url = "https://some-random-api.ml/animu/pat";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;


        } catch (e) {
            return message.channel.send(`Ocorreu um erro tente novamente!`)
        }


        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('Mencione um Usuário Valido');
}
      let avatar = message.author.displayAvatarURL({format: 'png'});
        const embed = new MessageEmbed()
            .setColor('#010101')
            .setDescription(`${message.author} Fez cafuné em ${user}`)
            .setFooter('Ahh que Fofo!')
            .setThumbnail(avatar)
            .setImage(image.link)
            .setAuthor(message.author.tag, avatar);

        await message.channel.send(embed)
    }
}