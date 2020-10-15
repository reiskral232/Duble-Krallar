
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Duble Krallar Genel Komutlar`, client.user.avatarURL)
.setColor('GOLD')
.setDescription(`<a:ayarlar1:751520036149264454> Duble Krallar  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Afk__`,`<a:ayarlar1:751520036149264454> \`${prefix}afk\` Komutu Yazıp Afk Kalırsınız`,true)
.addField(`__Ping__`,`<a:ayarlar1:751520036149264454> \`${prefix}ping\` Botumuzun Pingini Görürsünüz`,true)
.addField(`__Rol Ver__`,`<a:ayarlar1:751520036149264454> \`${prefix}rolver\` Etiketlediğiniz Kişiye Etiketlediğiniz Rolü Verir`,true)
.addField(`__Yeniden Başlat__`,`<a:ayarlar1:751520036149264454> \`${prefix}yeniden\` Botumuzu Yeniden Başlatır`,true)
.addField(`__Davet__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` Botumuzun Davet Linkini Alıp Davet Edebilirsiniz`,true)
.addField(`__Hata Bildir__`,`<a:ayarlar1:751520036149264454> \`${prefix}hata-bildir\` Botumuzun Hatalarını Bildirebilirsiniz`,true)
.addField(`__Profil__`,`<a:ayarlar1:751520036149264454> \`${prefix}hata-bildir\` Kullanıcı Profilinizi Görebilirsiniz`,true)
.addField(`__Bot Bilgi__`,`<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` Botumuzun İstatistiksel Bilgileri`,true)
.addField(`__Korona Bilgi__`,`<a:ayarlar1:751520036149264454> \`${prefix}korona\` Korona İstatistiklerini Görebilirsiniz`,true)
.addField(`__Avatar__`,`<a:ayarlar1:751520036149264454>\`${prefix}avatar\` Profil Fotoğrafınızı Görebilirsiniz`,true)
.addField(`__Yapımcım__`,`<a:ayarlar1:751520036149264454> \`${prefix}yapımcım\` Beni Yapan Kişiyi Görebilirsiniz`,true)
.addField(`__Pixel__`,`<a:ayarlar1:751520036149264454> \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`<a:ayarlar1:751520036149264454> \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`<a:ayarlar1:751520036149264454>\`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`<a:ayarlar1:751520036149264454> \`${prefix}rip\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`<a:ayarlar1:751520036149264454> \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar1:751520036149264454> \`${prefix}davet\` | Duble Krallar Botu Sunucunuza Davet Edersiniz\n<a:ayarlar1:751520036149264454> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["genel"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 
  