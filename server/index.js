const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())


require("./plugins/db")(app)
require("./routes/admin/index")(app)



app.listen(3000, () => {
  console.log('开启服务器');

})