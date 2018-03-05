//app.js

const Koa = require('koa');
const app = new Koa();
 
// ctx是koa提供的Context对象
// Context.response.body  =>  Content.body

app.use(async ctx => {
 ctx.body = 'Wise Wrong';
});
 
app.listen(3000);