const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Koruma Menüsü`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Rol Koruma__`,`<a:ayarlar1:751520036149264454> \`${prefix}rol-koruma\` Sunucunuzda Rol Silinirse Rölü Tekrar Açar`,true)
.addField(`__Bot Koruma__`,`<a:ayarlar1:751520036149264454> \`${prefix}bot-koruma\` Sunucunuza Sizden Başka Birisi Bot Ekleyemez`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["guard","koruma"], 
    permLevel: 0
  };
  exports.help = {
    name: 'koruma'
  }; 
  