var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: String,
    tags: [],
    entry: Number,
    publish: String,
    author: String,
    category: [],
    created: {type: Date, default: Date.now},
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Blog", blogSchema);
