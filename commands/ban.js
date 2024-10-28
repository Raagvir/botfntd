module.exports = {
    name: 'ban',
    description: 'Command to ban a member.',
    permissions: ["BAN_MEMBERS"],
    cooldown: ["40"],
    execute(client, message, args) {
      
      const member = message.mentions.users.first();
      
      if (member) {
        const memberTarger = message.guild.members.cache.get(member.id);
        memberTarger.ban();
        message.channel.send('User has been banned');
      } else {
        message.channel.send('Sorry That member dosent exist or you dont have perms')
      }
    }
  }