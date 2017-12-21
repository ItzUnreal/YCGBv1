const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'c!';
const prefix2 = 'catgirl';
const version = 'v1.0.0';
const tag = 'YoshiCatgirlBot#2979';
const token = 'process.env.BOT_TOKEN';

/* Catgirl bot source code! */

bot.on('ready', () => {
    console.log("Online. [" + version + ", " + bot.guilds.size + " servers.]");
    bot.user.setGame("Type c!help...!");
});

bot.on('message', (message) => {
    if(message.content.includes(prefix2) && message.author.tag != tag) {
        if(message.content.startsWith("c!")) { //Bypass for the double cat picture bug.

        } else {
        const args = message.content.substring(prefix2.length).split("  ");
        switch(args[0].toLowerCase()) {
            default:

                var imgresult = Math.floor(Math.random() * (129 - 1)) + 1;
                message.channel.send("", {
                    file: "./CatBot/" + imgresult + ".jpg"
                });

                break;
        }
    }}
    if(message.content.startsWith(prefix)) {
        const args = message.content.substring(prefix.length).split("  ");
        switch(args[0].toLowerCase()) {

            case 'help':

                message.channel.send("*Type catgirl to get a catgirl! Nya!* \n (Thanks to ItzUnreal for coding help!)");

                break;

            case 'catgirl':

                var imgresult = Math.floor(Math.random() * (129 - 1)) + 1;
                message.channel.send("", {
                    file: "./CatBot/" + imgresult + ".jpg"
                });

                break;
            
            default:

                message.channel.send("Meow? (Invalid / non existent command!)");

                break;
        }
    }
});

bot.login(token);
