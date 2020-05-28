module.exports = app => {
  const mongoose = require('mongoose')
  require('require-all')(__dirname + '/../models')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.set('useFindAndModify', false)

}