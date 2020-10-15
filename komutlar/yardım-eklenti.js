const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Eklenti Menüsü`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Sistemi__`,`<a:ayarlar1:751520036149264454> \`${prefix}yardımkayıt\` Gelişmiş Yardım Menüsü`,true)
.addField(`__Özel Oda Sistemi__`,`<a:ayarlar1:751520036149264454> \`${prefix}özeloda\` Özel Oda Sistemi`,true)
.addField(`__Sunucu Panel__`,`<a:ayarlar1:751520036149264454> \`${prefix}panel-kur\` Sunucunuzun İstatistiklerini Görürsünüz`,true)
.addField(`__İnvite Sistemi__`,`<a:ayarlar1:751520036149264454> \`${prefix}invite\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Sunucunuza Davet Edersiniz \n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eklenti"], 
    permLevel: 0
  };
  exports.help = {
    name: 'eklenti'
  }; 
  