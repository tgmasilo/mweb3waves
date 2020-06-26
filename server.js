const express = require('express');

const app = express();

app.use(express.static(__dirname + "/dist"));

app.get('/', (req, res, next) => {
    res.sendFile('index.html', {root: __dirname});
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));