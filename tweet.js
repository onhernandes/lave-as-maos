const config = require('./config')
const Twitter = require('twitter-lite')
const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessTokenKey,
  access_token_secret: config.accessTokenSecret
})

let index = 0
const messages = [
  'Lave as mãos!',
  'HORA DE LAVAR AS MÃOS',
  'WASH YOUR FUCKING HANDS BITCH',
  'PARA TUDO E VAI LAVAR AS MÃOS CACETE',
  'NÃO É PRA SAIR DE CASA, VAI LAVAR AS MÃOS',
  `
  - vc ama seu amigo?
  - sim
  - e vc ja falou pra ele lavar as mãos?
  - não
  - e vc ama seu amg????
  `,
  `para de esperar ela te responder e vai lavar as mao
    seja gado mas seja um gado sem corona vairus
  `,
  'vc ja parou pra pensar que vc DEVIA LAVAR SUAS MAOS AGORA',
  'O DIA TA LINDO P VC IR LAVA AS MAO',
  'se vc ta lendo isso VAI lavar as mao agora',
  'quem lava as mao = vai pro ceu',
  'vc devia sei la lavar as mao q tal?'
]

module.exports = async () => {
  const message = messages[index]
  index = index + 1

  if (index === messages.length) {
    index = 0
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
