const https = require("https");
const fs = require("fs");
const path = require("path");

const url = "https://www.sakhalin.kp.ru/daily/27609/4959895/";

const getRussianSentences = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          const russianSentences = [];
          const regex = /<p>(.*?)<\/p>/g;
          let match;
          while ((match = regex.exec(data))) {
            russianSentences.push(match[1]);
          }
          resolve(russianSentences);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

// Generate JSON file with Russian sentences
getRussianSentences(url)
  .then((russianSentences) => {
    fs.writeFileSync(
      path.join(__dirname, "russianSentences.json"),
      JSON.stringify(russianSentences, null, 2)
    );
    console.log("Russian sentences saved to russianSentences.json");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

