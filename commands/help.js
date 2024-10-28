const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'help cmd',
    permissions: [],
    execute(client, message, args) {
      
      message.channel.send(`Sendin help to your DM`)
      const embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setAuthor(message.author.username)
        .setColor('#00fff')
        .setThumbnail('https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots.jpg')
        .setFooter('This is (almost) all the commands')
        .addFields({
          name: 'Moderation',
          value: '`-clear`, `-kick`, `-ban`'
        },
          {
            name: 'Misc',
            value: '`-avatar/-av/-a`, `-tictactoe/-ttt`'
          },
          {
            name: 'Encomany',
            value: '`-balance/-bal`, `-beg`, `-dep/-deposit`, `-withdraw/-wd`'
          },
          {
            name: 'Fun',
            value: '`-youtube/-yt`'
          },
  
        )
      message.author.send({embeds: [embed]})
      
    }
  }
  