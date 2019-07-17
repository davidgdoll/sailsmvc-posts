//Dummy database

const post1 = {
    id: 1,
    title: 'Title 1',
    body: 'Body 1'
}

const post2 = {
    id: 2,
    title: 'Title 2',
    body: 'Body 2'
}

const post3 = {
    id: 3,
    title: 'Title 3',
    body: 'Body 3'
}

const allPosts = [post1, post2, post3]

module.exports = {
    posts: function(req, res) {
        res.send(allPosts)
    },

    create: function(req, res) {
        const title = req.param('title')
        const body = req.param('body')
        const newPost = {
            id: 4,
            title: title,
            body: body
        }
        allPosts.push(newPost)
        res.end()
    },

    findById: function(req, res) {
        const postId = req.param('postId')

        const filtered = allPosts.filter( p=> {
            return p.id == postId
        })

        if(filtered.length == 0) {
            res.send('Post not found')
        } else {
            res.send(filtered[0])
        }
    }
}