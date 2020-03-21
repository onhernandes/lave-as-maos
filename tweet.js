const config = require('./config')
const Twitter = require('twitter-lite')
const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessTokenKey,
  access_token_secret: config.accessTokenSecret
})
const { formatToTimeZone } = require('date-fns-timezone')

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
  const index = Math.floor(Math.random() * messages.length)
  const message = messages[index]

  const format = 'HH:mm, DD/MM/YYYY'
  const date = formatToTimeZone(new Date(), format, { timeZone: 'America/Sao_Paulo' })
  const dateString = `às ${date}`
  const status = `${message}\nLembrete ${dateString}`
  return client.post('statuses/update', { status })
}
