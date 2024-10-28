const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  permissions: [],
  cooldown: ["30"],
  description: "beg for moneh",
  async execute(client, message, args, profileData) {
  
    
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          moneh: randomNumber,
          bank: 1
        },
      }
    );
    return message.channel.send(`${message.author.username}, you begged and got ${randomNumber} moneh`);
    }
  }
