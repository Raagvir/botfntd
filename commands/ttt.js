const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })
module.exports = {
  name: 'tictactoe',
  description: 'ping cmd',
  permissions: [],
  aliases: ['ttt'],
  execute(client, message, args) {
    game.handleMessage(message);
  }
}