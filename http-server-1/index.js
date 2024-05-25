const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const port = 1;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html", ));
});

app.post('/post', (req, res) => {
  const body = req.body
  console.log(body)
  res.send({
    name: 'purv joshi',
    age: 20
  })
})


app.listen(port, () => {
  console.log(`on port ${port} listening on`);
});
