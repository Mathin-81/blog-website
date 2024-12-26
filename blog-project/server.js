const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files from the 'public' directory

let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    if (comment) {
        comments.push(comment);
        res.status(201).json({ message: 'Comment added' });
    } else {
        res.status(400).json({ message: 'Invalid comment' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
