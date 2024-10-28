module.exports = {
    name: 'clear',
    description: 'clear cmd',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: "1",
    aliases: ['clr'],
    execute(client, message, args){
      const messageArray = message.content.split(' ');
      const args1 = messageArray.slice(1);
  
      let deleteAmount;
  
      if (isNaN(args1[0]) || parseInt(args1[0]) <= 0) { return message.reply('Please put a number only!') }
  
      if (parseInt(args1[0]) > 99) {
        return message.reply('You can only delete 99 messages at a time!')
      } else {
        deleteAmount = parseInt(args1[0]);
      }
  
      message.channel.bulkDelete(deleteAmount + 1, true);
      message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
      .then(repliedMessage => {
        setTimeout(() => repliedMessage.delete(), 3000);
      });
    }
  }