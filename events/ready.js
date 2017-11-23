const request = require("request");

module.exports = async client => {
  // Why await here? Because the ready event isn't actually ready, sometimes
  // guild information will come in *after* ready. 1s is plenty, generally,
  // for all of them to be loaded.
  await client.wait(1000);

  // Both `wait` and `client.log` are in `./modules/functions`.
  client.log("log", `${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "Ready!");

  // We check for any guilds added while the bot was offline, if any were, they get a default configuration.
  client.guilds.filter(g => !client.settings.has(g.id)).forEach(g => client.settings.set(g.id, client.config.defaultSettings));
  
  client.user.setPresence({game:{name:bot.guilds.array().length+" servers | >help", type: 0}});
	request.post({
		url: "https://bots.discord.pw/api/bots/377609965554237453/stats",
		headers: {
			"content-type": "application/json",
			"Authorization": process.env.BOTS_PW_TOKEN
		},
		json: {
			"server_count": client.guilds.size.toString()
		}
	}, function(error, response, body) {
		console.log("DBots returns success: "+ body);
	});
	request.post({
		url: "https://discordbots.org/api/bots/377609965554237453/stats",
		headers: {
			"content-type": "application/json",
			"Authorization": process.env.DBL_ORG_TOKEN
		},
		json: {
			"server_count": client.guilds.size.toString()
		}
	}, function(error, response, body) {
		console.log("DBotsList returns success: "+ body);
	});
};
