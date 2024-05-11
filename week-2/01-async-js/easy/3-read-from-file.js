const fs = require("fs");

const path = "week-2/01-async-js/easy/file.txt";

fs.readFile(path, "utf-8", function (err, data) {
    
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  
});

let count = 0;
for (let i = 0; i < 10000000000; i++) {
  count++;
}