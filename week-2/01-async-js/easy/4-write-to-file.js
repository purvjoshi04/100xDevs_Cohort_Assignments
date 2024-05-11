const fs = require("fs");

const path = "week-2/01-async-js/easy/file.txt";

const newContent = "hello this is the new content in file.txt";

fs.writeFile(path, newContent, "utf-16le", function (err, data) {
  if (err) {
    console.log(err);
  }
});

fs.readFile(path, "utf-16le", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
