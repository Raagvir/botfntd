const profileModel = require("../models/profileSchema");
const Discord = require('discord.js')
module.exports = {
  name: "balance",
  aliases: ['bal'],
  permissions: [],
  cooldown: ["1"],
  description: "beg for coins",
  async execute(client, message, args) {
    profileData = await profileModel.findOne({ userID: message.author.id });
      if (!profileData) {
        let profile = await profileModel.create({
          userID: message.author.id,
          serverID: message.guild.id,
          moneh: 1000,
          bank: 1,
        });
        profile.save();
      }
    const embed = new Discord.MessageEmbed()
        .setTitle("Balance")
        .addFields({
            name: 'Wallet',
            value: `${profileData.moneh}`
          },
            {
              name: 'Bank',
              value: `${profileData.bank}`
            },
        )
    
  
      return message.channel.send({embeds: [embed]})
      .then(repliedMessage => {
        setTimeout(() => repliedMessage.delete(), 20000);
      });
    }
  }
