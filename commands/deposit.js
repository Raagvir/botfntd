const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.reply("Deposit amount must be a whole number");
    try {
      if (amount > profileData.moneh) return message.reply(`You don't have that amount of moneh to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            moneh: -amount,
            bank: amount,
          },
        }
      );

      return message.reply(`You deposited ${amount} moneh into your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};
