import express from 'express';  //calling the express web server
import path from 'path';
import open from 'open'; //opens in the web browser
import webpack from 'webpack'; //imports webpack
import config from '../webpack.config.dev';



const port = 3000; // this is the port we will be using
const app = express(); //setting an instance for express
const compiler  = webpack(config);

// here we tell express what to use
//prevents writing to the console in actually app development
/* eslint-disable  no-console */
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get ('/', function(req,res){ //letting it know of the routes to use
  res.sendFile (path.join(__dirname, '../src/index.html'));

});

app.listen(port, function(err){ //telling express the port to listen to and creating error handling

  if (err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }


})
