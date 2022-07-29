const postsModel = require("../models/posts-model");

function getAllPosts(ctx) {
    ctx.body = postsModel.posts;
}
    
    function getById(ctx)  {
        const index = ctx.request.params.id;
        ctx.body = postsModel.posts[index];
    }
    
    function deleteById(ctx){
        const index = ctx.request.params.id;
        postsModel.posts.splice(index, 1);
        ctx.status = 204;
    }
    
    function create(ctx) {
        const text = ctx.request.body.text;
        postsModel.posts.push({ text });
        ctx.status = 201;
    }

    module.exports = { getAllPosts, getById, deleteById, create };