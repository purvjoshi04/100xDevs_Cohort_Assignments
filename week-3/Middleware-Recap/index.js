import express from "express";

const app = express();

app.listen(3000);
function riderAgeMiddlewre(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Grow up first",
    });
  }
}

app.use(riderAgeMiddlewre);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});
app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});
