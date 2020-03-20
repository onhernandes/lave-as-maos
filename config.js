const {
  TT_CONSUMER_KEY,
  TT_CONSUMER_SECRET,
  TT_ACCESS_TOKEN_KEY,
  TT_ACCESS_TOKEN_SECRET
} = process.env

module.exports = {
  consumerKey: TT_CONSUMER_KEY || '',
  consumerSecret: TT_CONSUMER_SECRET || '',
  accessTokenKey: TT_ACCESS_TOKEN_KEY || '',
  accessTokenSecret: TT_ACCESS_TOKEN_SECRET || ''
}
