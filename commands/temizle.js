const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Komut için gerekli izinlere sahip değilsiniz");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.react('622507169442693143')
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`• **${args[0]} adet mesaj başarıyla silindi!**`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear' , 'sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};