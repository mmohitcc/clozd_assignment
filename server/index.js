const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { query } = require("express");

const db = require('./models')
const {User} = require ('./models')

//middleware
app.use(cors());
app.use(express.json());

// routes

// create user
app.post("/user", async (req, res) => {
    try {
        const {title, first_name, last_name, street, city, state, postcode, email, phone, dob} = req.body
        console.log(req.body)
        User.create({
            title: title,
            first_name: first_name,
            last_name: last_name,
            street: street,
            city: city,
            state: state,
            postcode: postcode,
            email: email,
            phone: phone,
            dob: dob
        })
        // const newUser = await pool.query("INSERT INTO \"user\" VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [3, title, first_name, last_name, street, city, state, postcode, email, phone, dob]);
    } catch (err) {
        console.log(err)
    }
});


// index all users
app.get("/users", async (req, res) => {
    try {
        let page = 0;
        let size = 10;

        const pageNumber = Number.parseInt(req.query.page)
        const pageSize = Number.parseInt(req.query.size)

        if(!Number.isNaN(pageNumber) && pageNumber > 0 ) {
            page = pageNumber;
        }

        if(!Number.isNaN(pageSize) && pageSize > 0) {
            size = pageSize;
        }

        // const query = await pool.query('select * from "user" ')
        const users = await User.findAndCountAll({
            limit: size,
            offset: page * size
        })
        res.send(users)
        console.log(users)
    } catch (err) {
        console.log(err)
    }
});

// single user
// index all users
app.get("/user", async (req, res) => {
    try {
        let userId = 0;

        const userIdNumber = Number.parseInt(req.query.id)


        if(!Number.isNaN(userIdNumber) && userIdNumber > 0 ) {
            userId = userIdNumber;
        }

        // const query = await pool.query('select * from "user" ')
        const users = await User.findAll({
            where: {
                id: userId
            },
        })
        res.send(users)
        console.log(users)
    } catch (err) {
        console.log(err)
    }
});


db.sequelize.sync().then((req) => {
    app.listen(5000, () => {
        console.log("server has started on port 5000")
    })
});
