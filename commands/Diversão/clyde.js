module.exports = {

    name:"clyde",
    category:"Diversão",
    aliases: [''],

    run: async (client, message, args) => {
        

    const { MessageAttachment } = require("discord.js");
    const fetch = require("node-fetch");
    const text = args.slice().join(' ');
        if (!text) {
            return message.channel.send(
                'Por Favor coloque um texto Valido.',
            );
        }
        message.delete()

        const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

        let response;
        try {
            response = await fetch(url).then(res => res.json());
        }
        catch (e) {
            return message.channel.send('Error');
        }
        const attachment = new MessageAttachment(response.message, 'clyde.png');
        return message.channel.send(attachment);
}}