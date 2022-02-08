import express from "express";
import https from "https";

const app = express();
const port = 3001;

app.get("/", function (req, res) {
  https.get(
    "https://api.openweathermap.org/data/2.5/weather?q=chennai&units=metric&appid=42142bf56ecb3330c8c616b3a9b733d3",
    function (response) {
      console.log(response);
    }
  );
  res.send("server is running");
});

app.listen(3001, function () {
  console.log("server is running");
});
