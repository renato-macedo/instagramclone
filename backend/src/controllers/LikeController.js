const Post = require('../models/Post');
const sharp = require('sharp');

module.exports = {
    async addLike(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes += 1

        await post.save();

        // Emits data to all users connected
        req.io.emit('like', post);

        return res.json(post);
    }
}