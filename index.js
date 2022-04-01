const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS ] })

function sendClive() {
  const guild = client.guilds.cache.get('956129489270759454')
  const channel = guild.channels.cache.get('956135115585622056')
  channel.send('@everyone Daily Clive Time!\n https://www.youtube.com/watch?v=C1UB1-LKX5E')
}

client.on('ready', () => {
  setInterval(() => {
    let date = new Date()
    if (date.getHours() == 20 && date.getMinutes == 27 && date.getSeconds == 1) {
      sendClive()
    }
  }, 1000)
})

client.login(process.env.TOKEN)