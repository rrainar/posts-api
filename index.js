const Koa = require ("koa");
const app = new Koa();

//const routes = require('./lib/routes/posts-routes');

//app.use(router.routes());

app.listen(3000, () => 
console.log("Server is running at http://localhost:3000")
);