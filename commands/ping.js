module.exports = {
    name: 'ping',
    description: 'ping cmd',
    permissions: [],
    aliases: ['p'],
    execute(client, message, args) {
      message.reply('PONG!')
    }
  }