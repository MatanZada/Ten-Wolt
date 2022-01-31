const express = require("express"),
    app = express()
port = process.env.PORT || 3000;
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const Client = require('./models/client')
const Order = require('./models/order')
const Store = require('./models/store')


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    })
})

mongoose
    .connect("mongodb://0.0.0.0:27017/tenWolt").then(() => {
        app.listen(port, () => {
            console.info(`start server start listening on port http://localhost:${port}`)
        })
    }).catch(err => console.error(err))

app.post('/creating-client', (req, res) => {
    const {
        name,
        adress,
        isVip,
        phone
    } = req.body.data
    const client = new Client({
        name,
        adress,
        isVip,
        phone
    })
    client.save()
        .then((client) => res.json(client))
        .catch((err) => res.json(err))
})

app.get('/find-allClients', (req, res) => {
    let findClient = Client.find((err, client) => {
        findClient = new Client(req.body);
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    })
})

app.patch('/clients/:id', async (req, res, next) => {
    console.log(req.body);
    const {
        name,
        adress,
        isVip,
        phone
    } = req.body
    Client.findByIdAndUpdate(
        req.body._id, {
            $set: {
                name,
                adress,
                isVip,
                phone,
            }
        }, {
            new: true
        }, (err, client) => {
            if (err) {
                res.json({
                    error: err
                });
            } else {
                res.json(client);
            }
        });
})

app.post('/creating-store', (req, res) => {
    const {
        name,
        adress,
        phone
    } = req.body
    const store = new Store({
        name,
        adress,
        phone
    })
    store.save()
        .then((store) => res.json(store))
        .catch((err) => res.json(err))
})

app.get('/find-allStore', (req, res) => {
    let findStore = Store.find((err, store) => {
        findStore = new Store(req.body.name);
        if (err) {
            console.log(err);
        } else {
            res.json(store);
        }
    })
})

app.patch('/store/:name', async (req, res, next) => {
    console.log(req.body.name);
    const {
        name,
        adress,
        phone
    } = req.body
    Store.findOneAndUpdate({
        name: req.body.name,
        $set: {
            name
        }
    }, {
        new: true
    }, (err, store) => {
        if (err) {
            res.json({
                error: err
            });
        } else {
            res.json(store);
        }
    });
})

app.post('/creating-order', (req, res) => {
    const {
        client,
        store
    } = req.body
    const order = new Order({
        client,
        store
    })
    order.save()
        .then((client, store) => res.json(client, store))
        .catch((err) => res.json(err))
})

app.get('/find-allOrder', (req, res) => {
    let findOrder = Order.find((err, order) => {
        findOrder = new Order(req.body._id);
        if (err) {
            console.log(err);
        } else {
            res.json(order);
        }
    })
})

app.patch('/order/:id', async (req, res, next) => {
    const {
        client,
        store
    } = req.body
    Order.findByIdAndUpdate({
        _id: req.params._id,
        $set: {
            client,
            store
        }
    }, {
        new: true
    }, (err, client) => {
        if (err) {
            res.json({
                error: err
            });
        } else {
            res.json(client);
        }
    });
})

app.get('/helth-checkout', (req, res) => {
    res.json({
        "!message": "i good"
    })
})