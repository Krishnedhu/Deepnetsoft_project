const express = require("express")
const cors = require('cors')

require("./db/config");
const User = require('./db/User');
const Product = require('./db/Product');
const dataservice = require('./db/data service')
const app = express()



app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.post("/Register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);

    

})

app.post("/Login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);

        } else {
            res.send({ result: "No user found" })
        }
    } else {
        res.send({ result: "User not exist" })
    }
})

app.post("/AddProduct", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get("/Listproducts", async (req, res) => {
    const products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No Product found" })
    }
})

app.listen(5000, () => {
    console.log("server started at port no:5000")
})






