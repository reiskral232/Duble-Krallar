const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:kral2:740243285376761916> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=730061947176878131&scope=bot&permissions=8) \n <a:emoji_19:740249173126938685> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/e2sJDWM) \n <a:yldz:752666455337861250> **Bot İnternet** [TIKLA](https://top.gg/bot/730061947176878131)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};