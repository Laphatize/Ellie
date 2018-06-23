// Ellie  Beta
// Client ID =  459469196527665162


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"



client.on('ready', () => {
    console.log("Ellie is now running. || " + Date());
    console.log("";
    client.user.setActivity('$help to get started.');
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
                        "name": "*Moderation Commands*",
                        "value": "Note, that these commands are W.I.P!"
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
                    }
                ]
            }
        })


    }

    if (message.content.startsWith(prefix + "date")) {
        console.log("COMMAND: " + message.content + " || " + message.content.author + " || " + Date())
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

/*

if (message.content === "$verify") {

 if(message.author.roles.find("name", "verified")) {

    message.reply("You're already verified!")

 } else {

    var unverifiedRole = member.guild.roles.find('name', 'unverified');
    var verifiedRole = member.guild.roles.find('name', 'verified');

    var member = message.author.id;
    member.removeRole(unverifiedRole)
    member.addRole(verifiedRole)

 }
}
*/
});


client.on("guildMemberAdd", member => {

    var role = member.guild.roles.find('name', 'unverified');
    member.addRole(role)

});

client.login("NDU5MTgwODEwNzQyOTIzMjc0.Dgyc-g.p4rRNzzkXWDtJWPEBaBJ_3Nzijo")