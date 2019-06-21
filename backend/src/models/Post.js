const mongoose =  require('mongoose')

// Defining the Post schema
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true  // this will create two fields: createdAt and updatedAt
})


module.exports = mongoose.model('Post', PostSchema)