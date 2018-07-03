const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
var approvedChannels = ["460156053682651167"];
const fs = require("fs");




client.on('ready', () => {
 console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
 client.user.setActivity(`Serving ${client.guilds.size} servers | $help`);
})



client.on("message", (message) => {



    if (message.content === "$help") {

        message.reply(" I have DM'ed you the help list. :)")
        message.author.sendMessage({
            "embed": {
                "title": "*General Commands*",
                "color": 1219411,
                "timestamp": "2018-06-22T23:07:00.601Z",
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/avatars/459180810742923274/ee30dec2663696ca2ad38f9cb2a04ca3.png",
                    "text": "Ellie"
                },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/avatars/459180810742923274/ee30dec2663696ca2ad38f9cb2a04ca3.png"
                },
                "author": {
                    "name": "Help List",
                    "icon_url": "https://cdn.discordapp.com/avatars/459180810742923274/ee30dec2663696ca2ad38f9cb2a04ca3.png"
                },
                "fields": [{
                        "name": "$date",
                        "value": "Retrieves date."
                    },{
                        "name": "$currencyStart",
                        "value": "DISABLED FOR YOU, CAUSE YOUR NOT IN A SCRATCH COIN SERVER. "
                    },
                    {
                        "name": "$predict <content>",
                        "value": "Fun little game where the computer guesses the outcome."
                    },
                    {
                        "name": "$numbergame <number 1-6>",
                        "value": "Try and see if you can guess the right number Ellie thinks!"
                    },
                    {
                        "name": "$poll <question>",
                        "value": "Creates a poll that allows users to react with 3 options."
                    },
                    {
                        "name": "$verify",
                        "value": "Allows you to create a channel where members have to fill in a captcha to join. Ellie Suite members only."
                    },
                    {
                        "name": "$creator",
                        "value": "Tells you the creator of the bot. Gee, this command will totally be used a lot. amiright?"
                    },
                    {
                        "name": "$kick <user> <reason>",
                        "value": "Kicks the user from the server. Buggy command, disabled by default."
                    },
                    {
                        "name": "$ban <user> <reason>",
                        "value": "Bans the user from the server. Buggy command, disabled by default."
                    },
                    {
                        "name": "$warn <user> <reason>",
                        "value": "Warns user. Buggy command, disabled by default."
                    },
                                        {
                        "name": "$advertiseRequest <email> @Laphatize",
                        "value": "This can be used for those who want to advertise with Ellie."
                    },
                     {
                        "name": "$purge <amount>",
                        "value": "Deletes <amount> amount of messages."
                    }

                ]
            }
            
            
        })
    //message.channel.send(":wave: By the way..have you heard of this thing called Listcord? It's this awesome place for you to share and discover new and exciting bots! Check it out for yourself, www.listcord.com.")
   // message.channel.send("[AD] This is a message from our sponsors! :)");
   // message.channel.send("***Listcord - The Discord Bot List*** @everyone\n*A simple, easy-to-use Discord bot list. Find the perfect bot for your server,\nvote for your favorites, and even add your own bot to our list!*\n*We love developers, and we'd love to have your bot with us.\n**Features:**\n- Sexy UI.\n- Tons of cool bots.\n- Search for bots or sort them.\n- Voting for bots.\n- Actively developed, new features every day!\nJoin us at https://www.listcord.com.\nAdd your bot to our list: https://www.listcord.com/developers/new\nCheck our our API docs if you're pro developer: https://www.listcord.com/developers/docs");
    }

    if (message.content.startsWith(prefix + "date")) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The date is: " + Date()
            }
        });
    }

    if (message.content === "$daily-joke") {

        message.channel.send({
            "embed": {
                "title": "Joke of the Day!",
                "description": "Q: Why did the chewing gum cross the road? A: He was stuck to the chicken's foot.",


                "color": 5695760
            }
        })

    }

    if (message.content === "$toxic") {
        
        message.delete();
        //message.channel.send("Hey everyone, Ellie will be down for a short period. The developer is working hard to bring it back up again.")
    //  message.channel.send("I'm baaaackkk.");
        
        message.channel.send("Psst...hear of this awesome thing called Listcord? You should upvote our bot..https://www.listcord.com/bot/459180810742923274")
        
    }

    if (message.content.startsWith("$poll")) {

        var prefixpoll = "$poll"
        const args = message.content.slice(prefixpoll.length).trim().split(/ +/g);
        console.log(args);
        let question = args.slice(0).join(" ");

        if (question.length === 0)
            return message.reply('**Invalid Format:** `$Poll <Question>`')


        message.react('👍')
            .then(() => message.react('👎'))
            .then(() => message.react('🤷'))
            .catch(() => console.error('Emoji failed to react.'));



        const embed = new Discord.RichEmbed()
            .setTitle("A Poll Has Been Started!")
            .setColor("#5599ff")
            .setDescription(`${question}`)
            .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)

        message.channel.send({
            embed
        });

    }


    if (message.content === "$creator") {

        message.channel.send("@Laphatize is my core creator.")

    }
    
        if (message.content === "$currencyStart") {

        message.channel.send("@Laphatize is my core creator.")

    }

    if (message.content.startsWith("$numbergame")) {

        var prefixNumberGame = "$numbergame";
        var randomNumberA = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumberA)

        const args = message.content.slice(prefixNumberGame.length).trim().split(/ +/g);
        let final = args.slice(0).join(" ");
        if (final.length === 0) {
            message.reply("**Invalid Format** $numbergame <number>");
        } else {

            if (final == randomNumberA) {

                message.reply("Correct! Good Job!")

            } else {

                message.reply("Nope, sorry. It was: " + randomNumberA)
                console.log("var final = " + final);
                console.log(final == randomNumberA)
            }
        }
    }


    if (message.content.startsWith("$predict"))
        var randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber == 1) {
        message.reply("Likely.")
    }
    if (randomNumber == 2) {
        message.reply("Perhaps.")
    }
    if (randomNumber == 3) {
        message.reply("Yes!!")
    }
    if (randomNumber == 4) {
        message.reply("No!!")
    }
    if (randomNumber == 5) {
        message.reply("I'm not sure.")
    }
    if (randomNumber == 6) {
        message.reply("Don't ask me I'm just a `Math.floor(Math.random() * 6) + 1`")
    }

    ///
    if (message.content.startsWith("$kick")) {
        var member = message.mentions.members.first();

        member.kick();
        message.channel.send({
            "embed": {
                "color": 16711684,
                "timestamp": "2018-06-22T15:42:03.688Z",
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/avatars/459180810742923274/ee30dec2663696ca2ad38f9cb2a04ca3.png",
                    "text": "Ellie"
                },


                "fields": [{
                        "name": "Moderator Action",
                        "value": member + " has been succesfully kicked! Please DM the user why."
                    }

                ]
            }
        })

    }

    if (message.content.startsWith("$advertiseRequest")) {

        var request = message.content;
        console.log(request.length);

        if (request.length == 17) {

            message.channel.send({
                "embed": {
                    "title": "Advertising Request",
                    "description": "Please use the follow template when submitting a request. ```$advertiseRequest <email> @Laphatize>```",
                    "color": 16718680
                }
            })

        } else {


            var tidyRequest = request.slice(17);

            message.mentions.users.first().send({
                "embed": {
                    "title": "You have a advertisment request:",
                    "description": tidyRequest + ". This request was sent by: " + `${message.author.username}`, 
                    "color": 15397120
                }
            });
            message.reply({
                "embed": {
                    "title": "Advertising Request sent! :white_check_mark: ",
                    "description": "We will get back to you asap!",
                    "color": 130873
                }
            })

        }

    }

if (message.content === "$test"){

    console.log(message.author.id);


}


if (approvedChannels.includes(message.channel.id)) {
if (message.content.startsWith("$verify")) {


    console.log("true")
if (message.member.roles.find("name", "verified")) { message.reply("You're already verified!")} else {
    try {


    var member = message.mentions.members.first();
    member.addRole("459811222959947779");
    member.removeRole("459812165348491264") 
    member.sendMessage("You've been verified. Please make sure to read any guidelines the server may have!")
    message.delete(1000)
    } catch(err) {

        message.sendMessage("Something went wrong with verifying you. The correct syntax is: `$verify @yourusername`")
        console.log(err);
        console.log("---- IMPORTANT VARIABLES ----");
        console.log("Variable 'member' = " + member);
    }
}

}
} else {

    if (message.content.startsWith("$verify")) {

        message.reply("This server/channel isn't configured for Ellie Verify. If you are the server owner, you can request for your\nserver to be part of the Ellie Verify system using the command `$requestVerify <servercode> <channelid>`")
    }




}


if (message.content.startsWith("$requestVerify")) {


    try {
    message.reply("I'm still working on the request feature. But, copy you message and save it for later.\n" + message.content);
} catch(err) {


    message.reply("Something went wrong!!")

}

}




if (message.content.startsWith("$purge")) {

try {


    var purgePre = message.content;
    var amount = purgePre.slice(7);

    if (amount > 100) {


        message.reply("Must be be under 100. :x:")


    } else {

        message.channel.bulkDelete(amount);
        message.channel.send("Deleted " + amount + " messages! :white_check_mark: ")

    }



} catch(err) {


    message.channel.send(":x: Something went wrong!");





}



}

var lico = "203135593692135425";

  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith("$eval")) {
    if(message.author.id !== lico) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send("Error doing that.");
    }
  }


if (message.content.startsWith("$move")) {
    
    var channelR = message.content.slice(5)
    message.channel.send("Convo moved to: " + channelR);
    
}







});


client.on("guildMemberAdd", member => {

try {
var role = member.guild.roles.find('name', 'unverified');
member.addRole(role)
} catch(err) {

member.sendMessage("Something went wrong with verifying you. Ensure you're using proper syntax. This error has been noted.")
    
}

});






client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.login("NDU5MTgwODEwNzQyOTIzMjc0.Dgyc-g.p4rRNzzkXWDtJWPEBaBJ_3Nzijo")
