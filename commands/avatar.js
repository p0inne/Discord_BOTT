const Discord = require(`discord.js`)

exports.run = async(client, message)=> {
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
.setAuthor(${user.displayAvatarURL} adlı kullanıcının avatarı.`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setFooter(`${message.author.tag} tarafından istendi.`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
.setAuthor(`${message.author.avatarURL} adlı kullanıcının avatarı.`)
.setImage(message.author.avatarURL({dynamic:true}))
.setTimestamp()
.setFooter(`${message.author.tag} tarafından istendi.`)
message.channel.send(embed)
 }
};

exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'avatarclerance',

}