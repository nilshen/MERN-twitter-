const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;



const bodyParser = require('body-parser');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const User = require('./models/User');
const Tweet = require('./models/Tweet');

// const passport = require('passport');



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!!"));

app.get("/", (req, res) => {
    console.log(res);
    // const user = new User({
    //     handle: "nil",
    //     email: "nil@nil",
    //     password: "123456",
    // });
    // user.save();
    res.send("Hello Nil Shen!");
});

// app.use(passport.initialize());
// require('./config/passport')(passport);



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`Listening on port ${port}`); });