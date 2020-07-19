const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if (!message.member.roles.cache.has("rol id")&& !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`kullanacağı rol isimi\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
 member.roles.add('');//verilecek rol
   member.roles.remove('');//alınacak rol
   member.roles.remove('');//alınacak rol
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${kullanıcı} **üyesine** <@&erkek rol id> **rolü verildi!**`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.react('emoji id') // verilecek tepki
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek","e"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'erkek',
  description: "Hadi erkek olalımm",
  usage: 'erkek'
}