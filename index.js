const express = require('express')
const app = express();
const phone = require('./phone.json')
const port = 5000;

app.get('/', (req, res) => {
    res.send('hi this is nayeem rahman farhad')
})
app.get('/phone', (req, res) => {
    res.send(phone)
})
app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id);
    const singlePhone = phone.find(pi => pi.id === id || {} );
    res.send(singlePhone)
})

app.listen(port, () => {
    console.log(`this port running in ${port}`);
})