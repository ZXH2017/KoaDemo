// routes/index.js

// const fs = require('fs');

// const router = require('koa-router')(); //引入路由中间件koa-router
// // 相当于
// // const koaRouter = require('koa-router');
// // const router = koaRouter();

// module.exports = router

// router.get('/index', async (ctx, next) => {
//     await this.render('index');
// });

// router.get('/about/:name', async (ctx, next) => {
//     ctx.body = `I am ${ctx.params.name}!`;
// });

const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
  await ctx.render('index');
});

module.exports = router

