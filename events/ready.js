const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username}: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.users.cache.size + ` kullanıcıya hizmet veriliyor!`);  
  //AKTİFLİK DURUMU İÇİN
  client.user.setStatus("dnd");
  //idle = BOŞTA
  //online = ÇEVRİMİÇİ
  //dnd = RAHATSIZ ETMEYİN
    
  
  //DURUM İÇİN
  client.user.setActivity(`URSULA AHMET ALTYAPI`,{ type: 'LISTENING' });
  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 

  
  
  //YAYIN İÇİN
  //client.user.setActivity("Urs", {
  //type: "STREAMING",
  //url: "https://www.twitch.tv/urs"
  //});
};
