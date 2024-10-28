const {MessageButton, MessageComponentInteraction, MessageActionRow } = require('discord.js');
const fs = require('fs');
const Discord = require('discord.js');


const newEmbed = new Discord.MessageEmbed()
    .setColor('#5a22d4')
    .setTitle('Commands')
    .addFields(
    {name:`Page 1`, value: `General (button1)`},
    {name:`Page 2`, value: `Moderation (button2)`},
    {name:`Page 3`, value: `Economy (button3)`},
)

const embed2 = new Discord.MessageEmbed()
.setColor("#5a22d4")
.setTitle('General Commands')
.addFields(
    {name:'ttt', value: `Tic tac toe`},
    {name:`rules`, value: 'Rules of the server'},
    {name:'ping', value: 'JUST DO IT'},
    {name:`help`, value: `List of all commands`},
)

const embed3 = new Discord.MessageEmbed()
.setColor("#5a22d4")
.setTitle('Moderation')
.addFields(
    {name:'kick', value: `Use this to kick others`},
    {name:`clear`, value: 'Use this to purge messages (CURRENTLY BROKEN)'},
)

const embed4 = new Discord.MessageEmbed()
.setColor("#5a22d4")
.setTitle('Economy')
.addFields(
    {name:'balance', value: `Use this to check ur balance`},
    {name:`beg`, value: 'Use this to beg for moneh'},
    {name:`More coming soon!`}
)

module.exports = {
    name: 'help',
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    description: "this is a help command!",
    async execute(client, message, args) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SUCCESS')
            .setCustomId('btn1')
            .setLabel('Page1'),

            new MessageButton()
            .setStyle('SUCCESS')
            .setCustomId('btn2')
            .setLabel('Page2'),

            new MessageButton()
            .setStyle('SUCCESS')
            .setCustomId('btn3')
            .setLabel('Page3'),


        )
        message.channel.send({ embeds: [newEmbed] });
    }
}
}