const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if (!message.member.roles.cache.has("KAYITÇI ROL İD")&& !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`kullanacağı rol isimi\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcı etiketlemelisiniz')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
 member.roles.add('');//VERİLECEK ROL
  //member.roles.add('');//VERİLECEK ROL
  /// NOT ! : BİRDEN FAZLA ROL VERMEK,, ALDIRMAK İÇİN KODU KOPYALAYABİLİRSİNİZ 
  //TEK BİR ROL ALDIRIP VERECEKSENİZ SİLEBİLİRSİNİZ FAZLALIKLARI
   member.roles.remove('');//ALINACAK ROL
   member.roles.remove('');//ALINACAK ROL
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${kullanıcı} **üyesine** <@&kız rol id> **rolü verildi!**`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.react('emoji id') // verilecek tepki
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kadın","k"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'kız',
  description: "KADIN KAYIT",
  usage: 'erkek'
}