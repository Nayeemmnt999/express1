const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hi this is nayeem rahman farhad')
})
app.listen(port, () => {
    console.log(`this port running in ${port}`);
})