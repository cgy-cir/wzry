const express = require('express')

const app = express()

app.set('secret', 'dsa456fas1d23')

app.use(require('cors')())
app.use(express.json())



app.use('/uploads', express.static(__dirname + '/uploads'))

require("./plugins/db")(app)
require("./routes/admin/index")(app)



app.listen(3000, () => {
  console.log('开启服务器');

})