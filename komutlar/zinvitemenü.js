const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Eklenti Menüsü`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet Kanal__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet-kanal\` Davet Kanalı Belirlersin`,true)
.addField(`__Davet Ekle__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet-ekle\` Seçilen Kullanıcıya Davet Ekler`,true)
.addField(`__Davet Sil__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet-sil\` Seçilen Kullanıcının Davetlerini Silersiniz`,true)
.addField(`__Davet Sıfırla__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet-sıfırla\` Herkesin Davetini Sıfırlarsınız`,true)
.addField(`__Davet Kanal Sıfırla__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet-kanal-sıfırla\` Davet Kanalını Sıfırlarsınız`,true)
.addField(`__Davetler__`,`<a:ayarlar1:751520036149264454> \`${prefix}davetler\` Davetlerinizi Görürsünüz`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["invite"], 
    permLevel: 0
  };
  exports.help = {
    name: 'invite'
  }; 
  