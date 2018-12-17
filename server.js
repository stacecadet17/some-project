let express = require("express");
let app = express();
const path = require("path");


//Static Folder
app.use(express.static(__dirname + '/public/dist/some-project'));

//Body parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Morgan
let morgan = require('morgan');
app.use(morgan('dev'));

//Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/userSchema');
let UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    editable: { type: Boolean, required: true },
})

mongoose.model("User", UserSchema);
let User = mongoose.model("User");


//Routes

//get all users
app.get("/users", (req, res, next) => {
    User.find({}, (err, users) => {
        return res.json(users);
    })
});

//create user
app.post("/users", (req, res, next) => {
    console.log(req.body);
    delete req.body._id
    User.create(req.body, (err, user) => {
        if (err) res.json(err);
        else return res.json(user)
    })
});

//delete user
app.delete("/users/:id", (req, res, next) => {
    console.log(req.params.id);
    User.deleteOne({_id:req.params.id}, (err, data) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
});

app.put("/users/:id", (req, res, next) => {
    console.log(req.params._id);
    console.log(req.body);
    User.update({_id:req.params.id}, req.body, (err, rawData) => {
        if(err) return res.json(err)
        else return res.json(true)
    })
})


//This piece is for the case that any of the routes do not catch, just redirect back to the index.html file
app.all("*", (req, res, next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
})

app.listen(1337, console.log("listening on port 1337"));