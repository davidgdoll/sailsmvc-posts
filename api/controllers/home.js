module.exports = async function(req, res) {
    const allPost = await Post.find()
    res.view('pages/home', 
        {allPost}
    )
}