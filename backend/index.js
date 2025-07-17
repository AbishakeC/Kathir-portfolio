const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    console.log("This is index page");
    res.send("Welcome to the index page");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
