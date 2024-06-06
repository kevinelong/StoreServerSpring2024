const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public')) //server static from
app.get('/api/product', (req, res) => res.json(products)); //serve /api/product

app.post('/api/order', (req, res)=>{
    data = req.body
    console.log(data)
    res.json(data)
});

app.listen(9090)

const products =         [
    {
        "name": "Pencil",
        "desc": "Wood lead pencil #2 with eraser.",
        "price": 0.25,
        "images": [
            {
                "name" : "default",
                "path" : "./images/pencil.png"
            },
            {
                "name" : "side",
                "path" : "./images/pencil_side.png"
            }
        ]
    },
    {
        "name": "Paper",
        "desc": "8.5x11\\\" recycled stock.",
        "price": 2.50,
        "images": [
            {
                "name" : "default",
                "path" : "./images/paper.png"
            },
            {
                "name" : "top",
                "path" : "./images/paper_top.png"
            }
        ]
    }
];

