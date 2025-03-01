const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//express.urlencoded는 URL-encoded 데이터를 해석해서 req.body에 객체 형태로 넣어줍니다
//extended: false: querystring 라이브러리를 사용해 단순한 키-값 쌍만 해석합니다.
//extended: true: qs 라이브러리를 사용해 복잡한 객체나 배열도 해석할 수 있습니다.

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send('hello from node api');
});


mongoose.connect("mongodb+srv://Jade:ehdxks8663z*@backendapi.jzom4.mongodb.net/")
    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log('server is running on port 3000');
});
    })
    .catch(() => {
        console.log("disconnected to db");
    });