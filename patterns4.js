const http = require('http');
const fs = require('fs');

const url = 'https://news.ycombinator.com';

function getListOfTitles(html) {
  const regex = /<a.*?>(.*?)<\/a>/g;
  const titles = [];
  let match;
  while (match = regex.exec(html)) {
    titles.push(match[1]);
  }
  return titles;
}

function extractDivs(html) {
  const regex = /<div.*?>(.*?)<\/div>/g;
  const divs = [];
  let match;
  while (match = regex.exec(html)) {
    divs.push(match[1]);
  }
  return divs;
}

function updateContentAtMidnight() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (hours === 0 && minutes === 0 && seconds === 0) {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const divs = extractDivs(data);
      const titles = getListOfTitles(data);
      fs.writeFile('index.html', divs.join(''), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Content updated');
      })
    })
  }
}

position += movementDistance;
pixel = drawPixel(grid)

imagePixelsData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

