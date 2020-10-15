const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Moderasyon Komutları`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Reklam Engel__`,`<a:ayarlar1:751520036149264454> \`${prefix}reklam-engel\` Sunucunzuda Reklamları Engeller`,true)
.addField(`__Reklam Kick__`,`<a:ayarlar1:751520036149264454> \`${prefix}reklam-kick\` Sunucunuzda Reklam Yapanları 3 Uyarıda Kickler`,true)
.addField(`__Ban__`,`<a:ayarlar1:751520036149264454> \`${prefix}ban\`  Sunucunuzda Belirtiğiniz Kişiyi Banlar`,true)
.addField(`__Kick__`,`<a:ayarlar1:751520036149264454> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler `,true)
.addField(`__Unban__`,`<a:ayarlar1:751520036149264454> \`${prefix}unban\`  Sunucunuzda Belirtiğiniz İD'nin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:ayarlar1:751520036149264454> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıtlarını Tuttar`,true)
.addField(`__Sayaç__`,`<a:ayarlar1:751520036149264454> \`${prefix}sayaç\` Sunucunuzda Sayaç Tuttar`,true)
.addField(`__Uyarı__`,`<a:ayarlar1:751520036149264454> \`${prefix}yardımuyarı\` Sunucunuza Gelişmiş Uyarı Sistemi`,true)
.addField(`__Sayaç Kapat__`,`<a:ayarlar1:751520036149264454> \`${prefix}sayaç-kapat\` Sunucunuzun Sayaç Sistemini Kapattır`,true)
.addField(`__Ban Say__`,`<a:ayarlar1:751520036149264454> \`${prefix}bansay \` Sunucunuzdan Kimlerin Banlandığını Görebilirsiniz`,true)
.addField(`__Banaffı__`,`<a:ayarlar1:751520036149264454> \`${prefix}banaffı \` Sunucunuzdan Banlanan Herkesin Banını Açar `,true)
.addField(`__Yavaş Mod__`,`<a:ayarlar1:751520036149264454> \`${prefix}yavaşmod \` Sunucunuzda Berirlenen Sohbete Yazma Delayı Koyabilirsiniz `,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  