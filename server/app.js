const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const server = require('http').Server(app);
const io=require('socket.io')(server);
mongoose.connect('mongodb://localhost:27017/chatapp', {useNewUrlParser: true})

mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));


io.on('connection', (socket) =>{
  console.log('new user connected')
})

const Message = require("./models/message");
app.get("/api/chat", (req, res) => {
  Message.find().then((rec) => {
    if (rec) {
      res.send(rec);
    } else {
      res.send([]);
    }
  });
});

app.post("/api/chat", (req, res) => {
  const newMessage = new Message({
    _id: mongoose.Types.ObjectId(),
    message: req.body.message,
    user: "user",
  });
  newMessage.save().then((rec) => {
    if (rec) {
      res.send(rec);
    } else {
      res.send([]);
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

server.listen(3000, () => console.log("Listening on port 3000..."));
