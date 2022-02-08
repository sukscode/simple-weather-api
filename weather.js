import express from "express";
import https from "https";

const app = express();
const port = 3001;

app.get("/", function (req, res) {
 // res.sendFile(__dirname+"/index.htm");
  const query="chennai";
  const apiKey="42142bf56ecb3330c8c616b3a9b733d3";

  https.get(
    "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid="+apiKey,
    function (response) {
      console.log(response.statusCode);
      response.on("data", function (data) {
        console.log(data);
        const weatherData = JSON.parse(data);
        console.log(weatherData); //convert data into json
        console.log(JSON.stringify(data)); //reverse
        const temp = weatherData.main.temp;
        console.log(temp);
        const desc = weatherData.weather[0].description;
        console.log(desc);
        const icon=weatherData.weather[0].icon;
        const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<h1>The temperature in chennai is "+temp+" degrees Celcius.</h1>");
        res.write("<h4>The weather is currently "+desc+"</h4>");
        res.write("<img src="+imageURL+">");
        res.send();
        


      });
    }
  );
  
});

app.listen(3001, function () {
  console.log("server is running");
});
