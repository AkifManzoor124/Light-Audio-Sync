//Maybe i can get the beat of the song in real time first 
//I can change the brightness based on how loud the song is

const fetch = require("node-fetch");

//create a secret key for the API
const url = "https://api.spotify.com/v1/audio-analysis/3JIxjvbbDrA9ztYlNcp3yL";

//create a secret file to store the token
const options = {
  headers: {
    Authorization: "Bearer BQA3wmQ7WGaTjCXiK0HiDrafcYjR3hUykru4ZgjwGHpZHOn2xbrwue2r5Ckjj_L7EyX0oz3jIIRZn2vcg4GnLWET3iOqu8CUdtuDIxNqcaaZIriX1T6xL-HRTsCHeZNnoVRuJMy1R_p5SU5ZWpUuRwtObQsy39xl46w"
  }
};


chartData = []

/**
 * It takes the data from the Spotify API and pushes the start time of each bar into an array called
 * chartData
 */
async function getData(){
  audioAnalysis = await fetch(url, options)
  .then( res => res.json() )

  await audioAnalysis["bars"].forEach(element => {
    chartData.push(element["start"])
  });
  console.log(chartData)
} 

getData()


var http = require('http');
var fs = require('fs');

http.createServer(function (req, response) {
    fs.readFile('index.html', 'utf-8', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        var result = data.replace('{{chartData}}', JSON.stringify(chartData));
        response.write(result);
        response.end();
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');