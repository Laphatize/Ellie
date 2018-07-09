// Made by laphatize   

const fs = require("fs")
const admins = require("./admins.txt")
const Discord = require('discord.js');
const client = new Discord.Client();
const config = "./config.json"

var errorLog;
const request = require('request');
const Client = require('fortnite')
const fortnite = new Client("214b9e9a-28d2-4059-8b5e-57158f59f5e0")


// MjAzMTM1NTkzNjkyMTM1NDI1.Dhe8kg.cJ9u64qcRB9ZXprOd9TfVq7dzBg"


client.on('ready', () => {
  console.log('Ellie has now started!');
  client.user.setActivity("$help to get started!")
});




client.on('message', message => {




if (message.content === "$profile") {

  message.content("We're really sorry, but profile systems aren't set up yet. I'll be sure to let you know when this is set up.")

} 





if (message.content.startsWith("$")) {
	
//	console.log(message.content + " was used by " + message.author.id);
  try {
  var lastCommand = message.content;
  fs.appendFileSync("commandlogs.txt", lastCommand + " used by " + message.author.id + " on " + Date() + "\n");
	} catch(err) {


    console.log(err)

  }
}


if (message.content === "$server-status") {



    message.reply("**Server Status**\nServer Region: Eastern USA\nServer OS: Raspbian OS (Linux)\nServer: Raspberry Pi 3 Model B\n")



}


if (message.content === "$change-token") {


  message.reply("Token has been changed. We allow users to change the token whenever they want. If there are alot of people requesting to change the token, we auto-merge all of the requests.")


}
if (message.content === "$server-region") {

  message.reply("Eastern USA || Location may vary within this region.")


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

  message.channel.send({embed});

}

if (message.content.startsWith("$anti-raid")) {

if (tempadmin.includes(message.author.id)) {
var request = message.content.slice(11);
message.reply("Server settings have changed.")
} else {

  message.reply("Hmm, you don't seem to have enough permissions!;")

};

};




  if (message.content === "$help") {

    message.channel.send({
    "embed": {
    "color": 4667381,
    "timestamp": "2018-07-06T02:08:30.893Z",
    "footer": {
     "text": "© Ellie"
    },


    "author": {
      "name": "Ellie",
      "url": "https://discordapp.com",
      "icon_url": "https://raw.githubusercontent.com/Laphatize/laphatize.github.io/master/miscellaneous/ellieImages/ellie-logo.jpg"
    },
    "fields": [
      {
        "name": "__Moderation__",
        "value": "**$kick <user> <reason>** - Kicks the desired user.\n**$ban <user> <reason>** - Bans the desired user.\n**$clear <amount>** - Clears desired amount of messages.\n**$move <channel>** - Tells users to move to desired channel.\n**$content-filtering** - Starts filtering any profanity detected.\n**$poll <question>** - Create a poll!"
      },
      {
        "name": "__Fun/Other__",
        "value": "**$8ball <content>** - Predicts the future.\n**$ng <number>** - Can you guess the number Ellie's thinking? (1-10)\n**$slap <user>** - Slaps the user *digitally*.\n**$fortnite-help** - Help list for Fortnite related commands.\n**$opt-out** - Prevents Ellie from storing any data from you.\n"
      },
      {
        "name": "__Music__",
        "value": "Music functionallity is yet to come. Sorry for any convience this may have caused."
      },
      {
        "name": "__Support__",
        "value": "**$help** - Retrieves a list of commands.\n**$uptime** - Retrives bot uptime.\n**$website** - Retrieves website of Ellie.\n**$server** - Retrieves Support Server invite link.\n**$ping** - Gets the ping of bot."
      }
    ]
  }
})

  };

  if (message.content === '$avatar') {
    message.reply(message.author.avatarURL);
  }

  if (message.content.startsWith("$date")){

    message.reply(Date());

  }


  if (message.content.startsWith("$fortnite-help")){
  message.reply(":x: Fortnite functionallity is temporarily disabled, please try again later.")
  }


  if (message.content.startsWith("$kick")){




    try {


      var member = message.mentions.members.last();
      var removedPrefix = message.content.slice(5)
      console.log(removedPrefix)
      var reason = removedPrefix.slice(member.id.length + 5);

      if (reason.length == 0) {

        reason = "none given!"

      } else {

      member.kick();
      message.reply("Kicked user! Reason: " + reason);
  }

    } catch(err) {

      message.reply("Something went wrong! Use the format `$kick @username`");
      console.log(err);


    }

  }


  if (message.content.startsWith("$8ball")) {
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

  };


  if (message.content.startsWith("$ng")) {


    try {

      var randomNumber = Math.floor(Math.random() * 6) + 1;
      var ngu = message.content.slice(4);

      if (message.content.length == 0) {

        message.format("You wanted to play the number game? It's actually `$ng <number 1-6>`! Try again, maybe?")

      } else {

      if (ngu === randomNumber) {

        message.reply("GG, you were right!!")

      } else {

        message.reply("Nope. It was: " + randomNumber + ".")

      }
    }
  } catch(err) {

    message.reply("Something went wrong. This incident has been logged.")
    console.log(err);


  }

  } 

  if (message.content.startsWith("$ban")){




    try {


      var member = message.mentions.members.last();
      var removedPrefix = message.content.slice(5)
      console.log(removedPrefix)
      var reason = removedPrefix.slice(member.id.length + 5);

      if (reason.length == 0) {

        reason = "none given!"

      } else {

      member.kick();
      message.reply("Banned user! Reason: " + reason);
      }

    } catch(err) {

      message.reply("Something went wrong! Use the format `$ban @username");
      console.log(err);


    }

  }


  if (message.content.startsWith("$say")) {

    var toSay = message.content.slice(4);
    message.delete()
    message.channel.send(toSay);


  }


  if (message.content.startsWith("$clear")) {
    try {
    var toClear = message.content.slice(6);
    if (toClear > 100) {

      message.reply(":x: Amount needs to be less than 100!")

    } else {
    message.channel.bulkDelete(toClear);
    message.channel.send("Succesfully cleared " + toClear + " messages!")
  }
} catch(err) {

message.reply(":x: Something went wrong!")

}
  }

  if (message.content === "$uptime") {

    let totalSeconds = (client.uptime / 1000);
     let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);

let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;





message.channel.send(uptime)
  }



if (message.content.startsWith("$eval")) {

    var admins = fs.readFileSync("admins.txt", "utf-8").replace(/\r/gi, '');
    var admin = admins.split("\n");
    for (var i of admin) {
        if (i === message.author.id) {
            var code = message.content.slice(6);
            try {
                eval(code)
            } catch (err) {
                message.reply("❌ + ```" + err + "```")
            }
        } else {
            if (!admins.match(message.author.id)) return message.reply("owner only command");
        }
    }
};

//  var curse = fs.readFileSync("curse.txt", "utf-8").replace(/\r/gi, '');
//  if (!curse.match(message.content)) return message.delete();

if (message.content.startsWith("$admin")) {
    if (message.author.id !== "203135593692135425") return;
    var id = message.content.slice(6);
fs.appendFileSync("admins.txt", id.replace(/\<|\@|\>|\!/gi, '').replace(/ /gi, '') + "\n");
};

if (message.content.startsWith("$radmin")) {
    if (message.author.id !== "203135593692135425") return;
    var id = message.content.slice(7);

};


if (message.content.startsWith("$remind")) {

  if (message.author.id === "203135593692135425") {
  var toRemove = "$remind"
  var reminder = message.content.slice(toRemove.length);
  message.reply("Alrighty, I will place this in your reminders! The message has been deleted for your security.")
  message.delete()
} else {

message.reply(":x: That command isn't ready for the public yet. Sorry!")

}

}







if (message.content.startsWith("$move")) {


try {
  var channel2Move = message.content.slice(6);



  if (channel2Move.length == 0) { message.reply("Please specify the channel.")} else {
  message.channel.send("Please move this conversation to: " + channel2Move);
}
} catch(err) {

message.reply(":x: Something went wrong.")

}
}



if (message.content === "$website") {

message.channel.send({
  "embed": {
    "color": 4667381,
    "timestamp": "2018-07-06T02:08:30.893Z",
    "footer": {
     "text": "© Ellie"
    },


    "author": {
      "name": "Ellie",
      "url": "https://discordapp.com",
      "icon_url": "https://raw.githubusercontent.com/Laphatize/laphatize.github.io/master/miscellaneous/ellieImages/ellie-logo.jpg"
    },
    "fields": [
      {
        "name": "laphatize.github.io/projects/ellie/ellie.html",
        "value": "Website still in development."

      }
    ]
  }
})

if (message.content === "$server") {

message.reply("https://discord.gg/2Ypugq4");

}

}

if (message.content.startsWith("$slap")) {

  try {

var user2slap = message.mentions.members.last();
  if (user2slap.id.length == 0) {

    message.reply("You didn't specify the person you wanted to slap!")

  } else {


    message.channel.send(message.author + " slapped " + user2slap + "!")
    message.reply("https://media.giphy.com/media/PgqHnJPeZHxv2/giphy.gif")


  }
} catch(err) {


message.reply(":x: Something went wrong. This incident has been noted.")
console.log(err);


}

}


if (message.content === "$ping") {

message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');

}

if (message.content === "$kill") {

if (tempadmin.includes(message.author.id)) {
  message.reply("Ellie is shutting down..")
  process.exit(0)
} else {

message.reply("That command is restricted to Bot Developer only!")

}


}




if (message.content.startsWith("$emergencyhelp")) {

  var prefixEm = "$emergencyhelp"
  var servercode = message.content.slice(prefixEm.length + 1);

  if (servercode.length < 3) {

    message.reply(":x: Invalid invite code. Remember the format is `$emergencyhelp <server code>`")

  } else {

    try {
    message.reply("Alrighty, one of our expert problem-solves will be with you in a moment.")
    message.reply("Remember, if you abuse this command, your server will be banned from using Ellie, and any of it's bots partners!")

    console.log("EMERGENCY HELP REQUEST\nEMERGENCY HELP REQUEST\n"+ servercode)
} catch(err) {

  message.reply(":x: Ellie's core systems are being strange today. Couldn't complete your request. I'll send a emergency message automatically if I can fullfill the request")

  console.log(err)



}

  }


}





});








request({
    method: "POST",
    url: `https://discordapp.com/api/oauth2/applications/459180810742923274/bot/reset`,
    headers: {
        'authorization': "MjAzMTM1NTkzNjkyMTM1NDI1.Dhe8kg.cJ9u64qcRB9ZXprOd9TfVq7dzBg"
    },
}, (error, response, body) => {
    var json = JSON.parse(body);
    if (!json) return console.log("Invalid User Token");
    if (!json['token']) return console.log("Invalid User Token");
    return client.login(json['token']);
});

