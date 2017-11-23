const { version } = require("discord.js");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.reply("https://discordapp.com/oauth2/authorize?client_id=377609965554237453&scope=bot&permissions=67169284\n**All permissions are essential.**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Invite DiscordTel to your server",
  usage: "invite"
};
