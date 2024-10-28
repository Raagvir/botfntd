module.exports = {
    name: 'kick',
    description: 'Command to kick a member.',
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args){
      const member = message.mentions.users.first();
      if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.kick();
          message.channel.send('User has been successfully kicked');
      }else{
        message.channel.send('Either that user does not exist or you dont have the proper perms')
      }
    }
  }