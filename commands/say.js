const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let tag = message.guild.members.cache.filter(r=>r.user.username.includes('.')).size
    const voiceChannels = message.guild.channels.cache.find(c => c.type === 'voice');
    let count = 0;
  let member = message.guild.members.cache.size
   let ses =   message.guild.members.cache.filter(x => !x.user.bot && x.voice.channel).size
   let çevrimiçi = message.guild.members.cache.filter(m => m.presence.status !== "offline").size

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Sunucudaki üye sayısı", member)
        .addField("Çevrimiçi üye sayısı", çevrimiçi)
        .addField("Seslideki üye sayısı", ses)
        .addField("Tagdaki üye sayısı", tag) // tagınız yoksa bu satrı silin
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['info'],
    permLevel: 0  
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};

