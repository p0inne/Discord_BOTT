const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if (!message.member.roles.cache.has("KAYITÇI ROL İD")&& !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`Rolün İsmi\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin ')
  if (!isim) return message.channel.send('Bir isim yazmalısın ')
  member.setNickname(`• ${isim}`)
  const embed = new Discord.MessageEmbed()
  .addField(`• Kullanıcının takma adı değiştirildi.`, `Kullanıcı adını başarıyla \`• ${isim}\` olarak ayarladım!`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)  
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'nick <yeni nick>'
}