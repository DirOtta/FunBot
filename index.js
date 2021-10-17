const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]});

Client.login("ODk4NjAzNzQ0NzM0ODcxNjEy.YWmn8w.9Z3c989X6XExZBJtb0MCGG-qAKo");

const prefix = "c!";

Client.on("ready", async () => {
    Client.user.setStatus("dnd")
    Client.user.setActivity("in progress..."), //{type: 'WATCHING'})
    console.log("Bot Working");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

//ping cmd 
    if(message.content === prefix + "ping"){
        message.reply("Pong ! ;)");
    }

//Help cmd + embed 
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("b56eff")
            .setTitle("Chloé's Bot Commands")
            .setURL("https://discord.gg/4uHDSeZeSJ")
            .setDescription("List Of Commands")
            .setThumbnail("https://cdn.discordapp.com/icons/896653219500003378/07a61f1acc36f09af805d2a5c1446367.png")
            .addField("__help__", "Affiche l'ensemble des commandes")
            .addField("__ping__", "Vous envoies un pong ;)")
            .addField("__hug__", "Vous faites un calin")
            .addField("__pat__", "Vous tapoter la tête de quelqu'un")
            .addField("__baka__", "Insulte")
            .setFooter("All rights reserved to OTta.", "https://cdn.discordapp.com/attachments/804799004940566629/898890655386959872/C47.jpg");


        message.channel.send({ embeds: [embed]});
    }

//Pat cmd 
    if(message.content === prefix + "pat"){
        const embed = new Discord.MessageEmbed()
            .setColor("b56eff")
            .setDescription("You pat someone !")
            .setImage("https://cdn.discordapp.com/attachments/804799004940566629/899271880861700096/anime-pat-head-pats.gif")
            .setTimestamp()
            .setFooter("Pat");
        
        message.channel.send({ embeds: [embed]});
    }
    
//Hug cmd
    if(message.content === prefix + "hug"){
        const embed = new Discord.MessageEmbed()
            .setColor("b56eff")
            .setDescription("You doing a hug to someone !")
            .setImage("https://cdn.discordapp.com/attachments/804799004940566629/899232425438244904/tumblr_4b73c9ce37c2c8d34a97641f8fd97338_be4510db_500.gif")
            .setTimestamp()
            .setFooter("Hug");

        message.channel.send({ embeds: [embed]});
    }

//baka cmd 
    if(message.content === prefix + "baka"){
        const embed = new Discord.MessageEmbed()
            .setColor("b56eff")
            .setDesription("You are Baka !")
            .setImage("https://cdn.discordapp.com/attachments/804799004940566629/899383396927680572/baka-anime.gif")
            .setTimestamp()
            .setFooter("Baka");

        message.channel.send({ embeds: [embed]});
    }

});