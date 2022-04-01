const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
let guild
let channel

function sendClive() {
  channel.send('@everyone Daily Clive Time!\n https://www.youtube.com/watch?v=C1UB1-LKX5E')
}

client.on('ready', () => {
  guild = client.guilds.cache.get('956129489270759454')
  channel = guild.channels.cache.get('956135115585622056')

  setInterval(() => {
    let date = new Date()
    if (date.getHours() == 20 && date.getMinutes() == 41 && date.getSeconds() == 06) {
      sendClive()
    }
  }, 1000)
})

client.on('messageCreate', (message) => {
  if (message.content.includes('frozen') && message.content.includes('trick')) {
    message.channel.send('It\'s control shift eight.')
  }
})

client.login(process.env.TOKEN)