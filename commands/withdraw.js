const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.reply("Withdraw amount must be a whole number");
    try {
      if (amount > profileData.bank) return message.reply(`You don't have that amount of moneh to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            moneh: amount,
            bank: -amount,
          },
        }
      );

      return message.reply(`You withdrawed ${amount} moneh from your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};
