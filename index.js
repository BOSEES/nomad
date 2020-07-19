const express = require("express");
const app = express();
const port = 3333;

function handleListening() {
    console.log(`port http://localhost:${port}`);
}

app.listen(port, handleListening);