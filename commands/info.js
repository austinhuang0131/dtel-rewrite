const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply("check your DM!");
	message.author.sendEmbed(new Discord.RichEmbed().setColor("#007FFF").setTitle("📖 DiscordTel Information").setDescription("For command help, use `>help`.").addField("📞 Getting a number", "Before getting a number, you need to reserve a channel for your phone. Once you have done this, you'll have to run the `>wizard` command in the channel to get a number.").addField("✏ Number prefixes", "Most numbers have a prefix of `03XX`, where `XX` represents your shard number. There are some numbers with a prefix of `0900`, which are DM numbers (numbers you can assign in a direct message with the bot), and they act the same as `03XX` numbers, which can *also* have the same digits as `03XX` numbers. Numbers starting with `0800` or `0844`, as well as short codes starting with `*` or `#` are for special uses. Numbers starting with `05XX` are public payphones which can be only called from by `>pdial`.").addField("💰 Recharging", "See [this page](http://discordtel.austinhuang.me/en/latest/Payment/) for details.\nAfter recharging, dial `*233` or `>balance` to check balance.").addField("🔖 Phonebook","To use the phonebook, first dial `*411`. You can check for an existing **11-digit** number by pressing `1`, search the phonebook with **keywords** by pressing `2`. adding/editing/removing your number **from** the phonebook by pressing `3`, and checking a special number by pressing `4`.").addField("📥 Invite the bot", "**Click this button:** [<:dl:382568980218511361>](https://discordapp.com/oauth2/authorize?client_id=377609965554237453&scope=bot&permissions=67169284)").addField("📌 Official Server", "https://discord.gg/RN7pxrB").addField("📕 Detailed Guide", "https://discordtel.austinhuang.me"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Miscelaneous",
  description: "Information about DiscordTel",
  usage: "stats"
};
