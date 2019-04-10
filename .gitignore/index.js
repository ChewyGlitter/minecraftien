const Discord = require('discord.js');
const client = new Discord. Client();
var prefix = "!";
 
client. login ( 'NTEwMzM2NDcyNDE1NjAwNjQx.XK2t3g.qAQC0P4hSllrmPIzRns06oSLwg8' ) ;

client.on('message', message => {
    if(message.content === "!Commencer Poudlard") {
        message.reply('Salut jeune aventurier tu vas maintenant commencer ton aventure est tu prés ?') ;
        console.log( 'répond au commencements de Poudlard.' ) ;
    }
} ) ;

client.on('message', message => {
    if(message.content === "!Commencer Poudlard") {
        message.reply('Pour continuer fais !Début dans #début !!') ;
        console.log( 'répond au commencements de Poudlard.' ) ;
    }
} ) ;

client.on('message', message => {
    if(message.content === "Salut") {
        message.reply('Salut ça va ou pas') ;
        console.log( 'répond à slt' ) ;
    }
} ) ;

client.on("guildMemberAdd", member =>{
    member.guild.channels.get("513038742727032844").send(":tada: **Bienvenue **" + member.use + ":smile: Nous sommes content que tu est rejoins maintenant nous sommes " + member.guild.memberCount );
    console.log("+1");
})

