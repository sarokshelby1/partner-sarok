const Discord = require("discord.js");
const sarok= new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment");
const fs = require("fs");
var prefix = "1+";

sarok.on("ready", () => {
  console.log(`Logged in as ${sarok.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${sarok.user.username} " ]`);
  console.log("");
  console.log("information:");
  console.log("");
  console.log(`servers! [ " ${sarok.guilds.size} " ]`);
  console.log(`Users! [ " ${sarok.users.size} " ]`);
  console.log(`channels! [ " ${sarok.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});


sarok.on("ready", () => {
  console.log(`Logged in as ${sarok.user.tag}!`);
});
sarok.on("ready", () => {
  sarok.user.setStatus("idle");
});
sarok.on('ready', () => {
     sarok.user.setActivity("| Send Me Your Server Link |", { type: "Playing" });
});


sarok.on("message", message => {
if (message.content.includes("discord.gg"))
{ 
if (message.channel.type === "dm")
  
sarok.channels.get("737240408207392819").send(
`<@${message.author.id}>`+`${message.content}`
)
}})

 sarok.login("tokin") 



//////
sarok.on("message", message => {
if (message.content.includes("discord.gg"))
{
const embed = new Discord.RichEmbed().setColor("#F30700")
.setDescription(`**بەسەرکەوتوی ڕیکلامەکەت کرا
**
**__لینکی سێرڤەرەکامان __**
https://discord.gg/N5nZmA4
**`);
message.author.sendEmbed(embed);
}
});

sarok.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "partner") {
if (!(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هاتم ..**!");
})
.catch(console.log);
} else {
message.reply("**- لە هیچ ڤۆیسێک نیت**");
}
}
});
