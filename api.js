const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const tweet = require('./tweet')
const app = new Koa()

app.use(bodyParser())
app.use(async ctx => {
  try {
    ctx.body = await tweet()
  } catch (e) {
    ctx.body = e
  }
})

app.listen(80)
