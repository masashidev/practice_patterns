const fs = require("fs");

// Your data
const data = [...Array(10)].map(() => [...Array(10)].map(() => Math.floor(Math.random() * 100)));

// Convert the data to JSON format
const jsonData = JSON.stringify(data, null, 2);

// Write the JSON to a file
fs.writeFile("data.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("JSON file has been created");
  }
});
