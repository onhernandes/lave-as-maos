const config = require('./config')
const Twitter = require('twitter-lite')
const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessTokenKey,
  access_token_secret: config.accessTokenSecret
})

const defaultMessages = [
  'Lave as mãos!',
  'HORA DE LAVAR AS MÃOS',
  'WASH YOUR FUCKING HANDS BITCH',
  'PARA TUDO E VAI LAVAR AS MÃOS CACETE',
  'NÃO É PRA SAIR DE CASA, VAI LAVAR AS MÃOS'
]

let messages = defaultMessages.map(i => i)

module.exports = async () => {
  const message = messages.shift()

  if (messages.length === 0) {
    messages = defaultMessages.map(i => i)
  }

  const date = new Date()
  date.setTime(
    date.getTime() - (date.getTimezoneOffset() * 60 * 3000)
  )
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const dateString = `às ${hour}:${minutes}, ${day}/${month}/${year}`
  const status = `${message}\nLembrete ${dateString}`
  return client.post('statuses/update', { status })
}
