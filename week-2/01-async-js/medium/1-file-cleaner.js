const fs = require("fs");

const path = "week-2/01-async-js/medium/text.txt";

fs.readFile(path, "utf8", function (err, data) {
  if (!path) {
    console.log(err);
  }

  const newData = data.replace(/\s+/g, " ");
  fs.writeFile(path, newData, "utf-8", function (err, cleanData) {
    if (err) {
      console.log(err);
    } else {
      console.log("Check file data is cleaned");
    }
  });
});
