const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
    name: "lyrics",
    aliases: ["letra"],
    description: "comando para tocar música",
    run: async(client, message, args) => { 


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("A Dj Anjinha não está tocando nada no momento").catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `Não encontrei letras para á música ${queue.songs[0].title} :(`;
    } catch (error) {
      lyrics = `Não encontrei letras para á música ${queue.songs[0].title} :(`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle(`Letras da música **__${queue.songs[0].title}__** **|** __Músicas__ - Anjinha`)
      .setDescription(lyrics)
      .setColor("ff58c3")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
        }}