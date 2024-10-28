module.exports = {
    name: 'idtest',
    description: 'ping cmd',
    permissions: [],
    aliases: ['id'],
    execute(client, message, args) {
      const user = message.author.id
      if (!message.mentions.users.size) {
        return message.channel.send(user)
      }
      const mention = message.mentions.members.first();
      const e = mention.id;
      message.channel.send(e)
    }
  }