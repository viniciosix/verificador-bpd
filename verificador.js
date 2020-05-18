const { WebhookClient } = require('discord.js')

//crie um webhookno canal que deseja receber os últimos votos e configure essa primeira linha
const webhookClient = new WebhookClient('id do seu webhook', 'token do seu webhook'); 
 
let client = { 
bpd: "550305758583980042",
channel: "537433191393525760"
};

//configurar

let page = {link: "link da pagina do seu bot em https://botsparadiscord.com/"}; //ex: https://botsparadiscord.com/bots/696447552358449262

bot.on("message", async message => {
    if(message.author.id == client.bpd && message.channel.id == client.channel){
        var separador = message.content.split(' ');
        var parte_1 = message.content.substr(message.content.indexOf("#"));
        var parte_2 = parte_1.substr(7);
        var parte_3 = parte_2.substr(parte_2.indexOf(")","."));
        var parte_4 = parte_2.replace(parte_3, "");
 
        var bot_name_1 = parte_3.replace(") votou no bot **`", '');
        var bot_name_2 = bot_name_1.replace("`**.", '');
        var bot_name_3 = bot_name_2.replace(page.link, '');
        var bot_name_4 = bot_name_3.replace("<>", '');
        var bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "");
 
        if(bot_name_final == "nome do seu bot + discriminator"){          
            webhookClient.send(":thumbsup: `" + separador[1] + " votou no bot! :tada:\n" + page.link, {
            username: 'Nome do seu bot', //configure
            avatarURL: 'link da imagem do seu bot' //configure
        });
//verificador bots para discord
  // By: wiloficial#9287
  // Modificado por: VN#3599
  // Discord.js v12
  // Créditos WR Bot Discord: 
  // https://discord.gg/
