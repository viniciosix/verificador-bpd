// Verificador de votos (Bots para Discord) por: wiloficial#9287
// Modificado por: VN#3599
// Discord.js v12
// Créditos WR Bot Discord: https://botsparadiscord.com/bots/696447552358449262

const { WebhookClient, Client } = require('discord.js')

// crie um webhook no canal que deseja receber os últimos votos e configure essa primeira linha
const webhook = new WebhookClient('id do seu webhook', 'token do seu webhook'); 
const client = new Client();

// configurar
const config = { bpd: '550305758583980042', channel: '537433191393525760' };
const link = 'https://botsparadiscord.com/bots/{id do seu bot}'; // exemplo: https://botsparadiscord.com/bots/696447552358449262

client.on('message', async (message) => {
  if(message.author.id !== config.bpd && message.channel.id !== config.channel) return;
    
  let parte = message.content.substr(message.content.indexOf('#'));
  parte = parte.substr(7);
  parte = parte.substr(parte.indexOf(')', '.'));
  parte = parte.replace(parte, '');
    
  let bot_name = parte.replace(') votou no bot **`', '');
  bot_name = bot_name.replace('`**.', '');
  bot_name = bot_name.replace(link, '');
  bot_name = bot_name.replace('<>', '');
  bot_user = bot_name.replace(/(\r\n|\n|\r)/gm, '');
    
  if (bot_user === client.user.tag) { // exemplo: Bots Para Discord#6705
    webhook.send(`:thumbsup: \`${message.content.split(' ')[1]}\` votou no bot! :tada:\n${link}`, {
      username: client.user.username, // exemplo: Bots Para Discord
      avatarURL: client.user.avatarURL() // exemplo: https://cdn.discordapp.com/avatars/550305758583980042/dc10b0561b5ba70bab069fc0b0b88dfb.png
    });
  }
});
