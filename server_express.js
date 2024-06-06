const express = require('express')
const fs = require('fs') //file system

function readProducts() {
    const rawText = fs.readFileSync("./data/products.json");
    const data = JSON.parse(rawText);
    //we could sort before sending
    return data;
}
function addProduct(product) {
    const data = readProducts()
    data.push(product)
    fs.writeFileSync("./data/products.json", JSON.stringify(data))
    return product;
}
const app = express()
app.use(express.json()) //use json parse and headers where needed
app.use(express.static('public')) //server static from

app.get('/api/product', (req, res) => res.json(readProducts())); //READ serve /api/product
app.post('/api/product', (req, res) => res.json(addProduct(req.body))); //CREATE

app.post('/api/order', (req, res) => {
    data = req.body
    console.log(data)
    res.json(data)
});

app.listen(9090)
