module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    mergeParams: true
  })
  //登录校验中间件
  const auth = require('../../middleware/auth')



  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })


  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent"
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })




  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', auth(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://test.cgyyyyyy.icu//uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    //1.根据用户名找用户

    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')

    //2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')

    //3.返回token
    const token = jwt.sign({ id: user._id, }, app.get('secret'))
    res.send({ token })
  })

  app.post('/admin/api/register', async (req, res) => {
    const model = await AdminUser.create(req.body)
    res.send(model)
  })

  app.get('/admin/api/user', async (req, res) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    const { id } = jwt.verify(token, req.app.get('secret'))
    const user = await AdminUser.findById(id)
    res.send(user)
  })

  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)


  //错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}

