const prefix = '-';
const Discord = require('discord.js')
module.exports = {
  name: 'status',
  description: 'ping cmd',
  permissions: [],
  execute(client, message, args){
    const messageArray = message.content.split(' ');
    const args1 = messageArray.slice(1);
    if(message.author.id !== '622117360630890501') return message.channel.send('This command is only for the owner')
    if(!args1[0]) return message.channel.send('Please put 2 more arguments');
    if(!args1[1]) return message.channel.send('Please put 1 more argument')
    
    client.user.setActivity(args1[1], { type: args1[0] })
    const oof = args1[0] + ' ' + args1[1]
    let embed = new Discord.MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`Succesfully updated status to ${oof}`)
    message.reply({embeds: [embed]})
  }
}