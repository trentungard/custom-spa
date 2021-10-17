const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

const port = process.env.PORT || 3420;

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'index.html'))
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})