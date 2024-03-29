# 简介
wzry 是一个仿移动端王者荣耀官网和后台管理系统的项目，基于 vue-cli + vue-router + Element-Ui + node(Express) + mongodb(mongoose) 实现。管理后台录入的数据会通过 mongoose 传入数据库，移动端官网能够将数据动态地展示到页面上。

## 预览地址
[移动端官网](http://test.cgyyyyyy.icu/) (F12切换移动端展示更佳)
[后台管理系统](http://test.cgyyyyyy.icu/admin/)

## 一、 环境准备
1. 工具安装和环境搭建(nodejs,mongodb)

## 二、 项目启动
### 1、star本仓库并克隆项目到本地

```
git clone git@github.com:cgy-cir/wzry.git
```

### 2、进入项目目录

```
cd wzry
```

### 3、安装依赖

```
npm install
```

### 4、启动服务

#### （1）admin（后台管理系统）

```
npm run serve
```
#### （2）web 移动端
```
npm run serve
```
#### （3）server 服务端
```
npm run serve
```
#### （4）构建生产环境
```
npm run build
```
分别在admin和web目录下运行上面的命令，打包后的静态文件分别存放于server目录下的admin和web文件夹下，

![](https://user-gold-cdn.xitu.io/2020/5/28/17259c11896ebea3?w=357&h=609&f=png&s=25836)


## 三、 管理后台
1. 基于Element UI的后台管理基础界面搭建
#### 后台管理系统主要有以下功能：
1. 登录注册功能
1. 分类管理（无限级数）
1. 装备管理
1. 英雄管理
1. 文章管理（其中编辑器使用的是富文本编辑器 (vue2-editor)）
1. 广告管理
1. 管理员账号管理 (bcrypt)
1. 本地图片上传 (multer)
1. 登录模块使用接口 (jwt,jsonwebtoken)进行服务端登录校验
1. 客户端路由限制 (beforeEach)


**ps：所有增删改查均使用通用 CRUD 接口；通过中间件匹配前端传过来路由进行相应的增删改查**


**路由匹配中间件**
```
module.exports = () => { 
    return async (req, res, next) => { // 模型匹配中间件  // “resource”为动态参数，用来匹配相应资源
        const modelName = require('inflection').classify(req.params.resource) // 请求动态资源  这里需要安装一个inflection依赖包，用于类名转换
        req.Model = require(`../models/${modelName}`)
        next()
      }
}
```
```js
// 引入资源匹配中间件
  const resourceMiddleWare = require('../../middleware/resource.js')
 // 通用新增接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 通用修改接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 通用删除接口
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  // 通用获取列表接口
  router.get('/', async (req, res) => {
    const queryOptions = {}
    let pageNum = req.query.pageNum;
    let pageSize = req.query.pageSize;
    let count = await req.Model.find().count() // 总条数
    let items = ''
    let obj = ''
    // 为了通用性，这里不单独写Category的接口，因为Category要特殊获取上级分类，
    // 所以这里将它设置为动态参数传进去，以后类似的特殊请求都可以这样处理
    if (req.Model.modelName === 'Category' || req.Model.modelName === 'Model') {
      queryOptions.populate = 'parent'
    }
    if (pageNum) {
      items = await req.Model.find()
        .setOptions(queryOptions)
        .skip(parseInt(pageSize) * parseInt(pageNum - 1))
        .limit(parseInt(pageSize));
      obj = {
        count,
        items
      }
    } else {
      obj = await req.Model.find().setOptions(queryOptions).limit(count)
    }
    res.send(obj)
  })
  // 通用获取一条数据接口
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

```



## 四、移动端网站

1. 使用SASS (SCSS)进行base样式预定义（网站常用色彩、字体和边距定义 (colors, font,margin,padding)；
1. 页面整体框架使用flex布局
1. 页面轮播图使用的是‘vue swiper’插件
1. 项目中一部分图标是扣取官方精灵图片 (sprite)，剩余部分使用字体图标 (阿里巴巴iconfont)
1. 考虑到组件复用性，实现了通用列表卡片组件 (list-card, swiper)，方便快捷

#### 总体实现了三大模块：
**首页**
1. 首页顶部轮播
1. 首页导航轮播
1. 首页新闻资讯
1. 首页英雄列表


**新闻资讯详情页**
1. 新闻具体信息展示(数据后台传入)
2. 底部切换附近新闻
3. 使用 dayjs 匹配时间

**英雄详情页**
1. 英雄具体信息展示(数据后台传入)
2. 点击英雄技能切换具体技能信息

## 免责声明
本项目为仿做项目,仅做练手和学习使用,非官方App,禁止用于商业目的,产生的一切侵权著作法律后果,与本作者无关。

## License

[MIT](https://github.com/cgy-cir/wzry/LICENSE)

Copyright (c) 2020 cgy-cir
