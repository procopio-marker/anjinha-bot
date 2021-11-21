const Discord = require(`discord.js`);
const db = require('quick.db');
const config = require ("../../config.json");
const color = config.color

exports.run = async (client, message, args) => {
		let money = db
			.all()
			.filter(data => data.ID.startsWith(`bank`))
			.sort((a, b) => b.data - a.data);
		money.length = 10;
		var finalLb = '';
		for (var i in money) {
			finalLb += `**${money.indexOf(money[i]) + 1}. ${
				client.users.cache.get(money[i].ID.split('_')[1])
					? client.users.cache.get(money[i].ID.split('_')[1]).tag
					: 'Unknown User#0000'
			}** - ${money[i].data}:dollar:\n`;
		}
		

		const embed = new Discord.MessageEmbed()
			.setTitle(`System Failed`)
			.setColor("#ff58c3")
			.setDescription(`Desculpe pelo inconveniente, estamos realizando uma manutenção em nosso sistema.`)
		message.channel.send(embed);
	}
  exports.help = {
	name: 'moneytop',
	aliases: ['baltop']
};