const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
let guild
let channel

function sendClive() {
  const messages = [
    'Clive time? Already?', 
    'It\'s our daily clive time..', 
    'Stop what you\'re doing. It\'s clive time!',
    'Hurry, clive time is just second away!',
    'Broadcasting clive in... 20 seconds..',
    'I\'ve been waiting all day for this',
    'What time is it? Say it with me... clive time!',
    'Shut up clive!',
    'It\'s control shift eight. Unbelievable.',
    'You are fired.',
    'I\'m expected a roughly 10-20% drop',
    'James what are you doing?',
    'I thought I was frozen...',
    'That was a trap, and you are fired.',
    'We\'re seconds away folks...',
    'I really hope you didn\'t forget.'
  ]

  let message = messages[Math.floor(Math.random()  * messages.length)]
  channel.send('@everyone ' + message + '\nhttps://shutupc.live')
}

client.on('ready', () => {
  guild = client.guilds.cache.get('956129489270759454')
  channel = guild.channels.cache.get('956135115585622056')

  setInterval(() => {
    let date = new Date()

    // send message 20 seconds before clive time (which of course is 20:45:06)
    if (date.getHours() == 20 && date.getMinutes() == 44 && date.getSeconds() == 46) {
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