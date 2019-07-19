
module.exports = {
    posts: async function(req, res) {
        try {
            const posts = await Post.find()
            res.send(posts)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    create: async function(req, res) {
        const title = req.body.title
        const body = req.body.body

        try {
            const post = await Post.create({
                title: title,
                body: body
            })
            res.redirect('/home')
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    findById: async function(req, res) {
        const postId = req.param('postId')
        try {
            var post = await Post.find({id: postId});
            res.send(post)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    delete: async function(req, res) {
        const postId = req.param('postId')
        try {
            await Post.destroy({
                id: postId
            })
            res.end()
        } catch (err) {
            res.serverError(err.toString())
        }
    }
}