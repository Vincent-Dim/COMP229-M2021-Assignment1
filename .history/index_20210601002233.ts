import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';   //: type = value, don't have to do this
const port: number = 3000;


const server: http.Server = http.createServer((req, res) =>  // user request and server response
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); //sets up page header
  res.end('Hello, World');          //server responds with hello world on web page
});


server.listen(port, hostname, () =>     //similar to add event lister on java script
{
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

function displayHome(): void       //creat a function that reads a file name index.html
{
  fs.readFile("index.html", (err,data) =>   //reading file index.html
  {
    if(err)
    {
      console.log("Error"); //display error message if there is an error reading the file
    }
    
    console.log(data);
  });
}