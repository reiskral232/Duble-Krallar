const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Yardım Menüsü`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:ayarlar1:751520036149264454> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`<a:ayarlar1:751520036149264454> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:ayarlar1:751520036149264454> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  