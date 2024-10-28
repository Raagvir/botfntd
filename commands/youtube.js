const yts = require('yt-search');
const prefix = '-';
module.exports = {
    name: 'ytsearch',
    aliases: ['yt'],
    permissions: [],
    cooldown: ["40"],
    description: "Search on YouTube",
    async execute(client, message, Discord) {
        let args = message.content.slice(prefix.length).split(' ');
        if (!args) return message.reply('GIVE ME A FRICKING SEARCH QUERY I AINT READIN UR MIND HERE') //Checks if the user gave any search queries
        const searched = await yts.search(args.join(' ')); //Searches for videos
        message.reply(!searched.videos.length ? 'No Results' : searched.videos[0].url); //Sends the result
    }
}