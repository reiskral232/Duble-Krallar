const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Sunucu Komutları`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Duyuru__`,`<a:ayarlar1:751520036149264454> \`${prefix}duyuru\` Sunucunzuda Duyuru Yaparsınız`,true)
.addField(`__Oylama__`,`<a:ayarlar1:751520036149264454> \`${prefix}oylama\` Sunucunuzda Oylama Yaparsınız`,true)
.addField(`__Sohbet Aç__`,`<a:ayarlar1:751520036149264454> \`${prefix}aç\`  Sunucunuzda Sohbet Açarsınız`,true)
.addField(`__Sohbet Kapat__`,`<a:ayarlar1:751520036149264454> \`${prefix}kapat\` Sunucunuzda Sohbet Kapatırsınız `,true)
.addField(`__Sohbet Gizle__`,`<a:ayarlar1:751520036149264454> \`${prefix}gizle\`  Sunucunuzda Sohbet Gizlerseiniz`,true)
.addField(`__Çekiliş__`,`<a:ayarlar1:751520036149264454> \`${prefix}çekiliş\` Sunucunuzda Çekiliş Yaparsınız`,true)
.addField(`__Hızlı Çek__`,`<a:ayarlar1:751520036149264454> \`${prefix}hızlıçek\` Sunucunuzda Hızlı Çekiliş Yaparsınız`,true)
.addField(`__Üye Durum__`,`<a:ayarlar1:751520036149264454> \`${prefix}üyedurum\` Sunucunuzun Üye Durumu`,true)
.addField(`__Sunucu Bilgi__`,`<a:ayarlar1:751520036149264454> \`${prefix}scbilgi\` Sunucunuzun Bilgileri`,true)
.addField(`__Sunucu Davet__`,`<a:ayarlar1:751520036149264454> \`${prefix}sunucudavet \`Sunucunuzun Sınırsız Daveti `,true)
.addField(`__Canlı Destek__`,`<a:ayarlar1:751520036149264454> \`${prefix}canlı-destek\` Sunucunuzda Canlı Destek `,true)
.addField(`__Odaya Çek__`,`<a:ayarlar1:751520036149264454> \`${prefix}çek\` Sunucunuzda Berirlenen Kişiyi Ses'e Çekersiniz `,true)
.addField(`__Ban Sorgu__`,`<a:ayarlar1:751520036149264454> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Görürsünüz`,true)
.addField(`__Reklam Tara__`,`<a:ayarlar1:751520036149264454> \`${prefix}reklam-tara\` Sunucunuzda Reklamları Tararsınız`,true)
.addField(`__Sesli Sustur__`,`<a:ayarlar1:751520036149264454> \`${prefix}sesli-sustur\` Sunucunuzda Süreli Susturursunuz`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sunucu","sunucu"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sunucu'
  }; 
  