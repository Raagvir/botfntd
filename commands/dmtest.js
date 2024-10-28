
module.exports = {
  name: 'dmtest',
  description: 'testdm',
  permissions: [],
  aliases: ['td'],
  execute(client, message, args) {
    message.author.send('this should come in ur dms')
  }
}