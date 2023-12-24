import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import moment from "moment";
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/todolistDB';

// Middlewares
app.engine(".html", ejs.__express);
app.set("view engine", "html");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.route("/")
    .get(async (req, res) => {
        res.render('list');
    })

// connection
app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
