const express = require("express");
const app = express();

app.listen(3000);
app.use(express.json());
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const userKidneys = users[0].kidneys;
  const numberOfKidneys = userKidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < userKidneys.length; i++) {
    if (userKidneys[i].healthy) {
      healthyKidneys = healthyKidneys + 1;
    }
  }
  // let healthyKidneys = userKidneys.filter((kidney) => kidney.healthy ? 1 : 0);

  // let unhealthyKidneys = userKidneys.filter(kidney => kidney.unhealthy ? 1 : 0);

  let unhealthyKidneys = numberOfKidneys - healthyKidneys;
  res.send({
    numberOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  let userKidneys = users[0].kidneys;
  const isHealthy = req.body.isHealthy;
  // const isUnhealthy = req.body.isUnhealthy;

  userKidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Added!",
  });
});

app.put("/", function (req, res) {
  let numberOfKidneys = users[0].kidneys;
  for (let i = 0; i < numberOfKidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  let newKidneys = [];
  for (let i = 0; i <  users[0].kidneys.length; i++) {
    if ( users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
   users[0].kidneys = newKidneys;
  res.json({ msg: "deleted" });
});
