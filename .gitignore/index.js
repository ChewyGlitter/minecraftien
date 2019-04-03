const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";
 
client.login('NTEwMzM2NDcyNDE1NjAwNjQx.XKOV1A.IYWJjMaDZIs1pPRXaykT-bp2X68');
 
client.on('message', message =>{
    if(message.content === "tu fais quoi?"){
        message.channel.sendMessage('Je mange des pâtes dans ma pastabox ! :heart:');
        console.log('répond à tfq');
    }
});
