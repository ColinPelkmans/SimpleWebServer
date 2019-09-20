// const http = require("http");
// const url = require("url");
// const port = 3000;

// function set_response(response, content, status = 200) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write(content);
// }

// const server = http.createServer();

// /*const set_response = (response, content) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write(content);
// };
// */

// server.on("request", (request, response) => {
//   let path = url.parse(request.url).pathname;
//   console.log(path);

//   if (path === "/") {
//     set_response(response, "Hello world");
//   } else if (path === "/about") {
//     set_response(response, "Created by VIVES peoples");
//   } else {
//     set_response(response, "Error", 400);
//   }
//   response.end();
// });

// server.listen(port, () => {
//   console.log("Node server created at port " + port);
// });

const express = require("express");
const app = express();
const PORT = 3000;

//Basic routes
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/about", (request, response) => {
  response.send("This app was made by VIVES peoples");
});

//Express error handling middleware
app.use((request, response) => {
  response.type("text/plain");
  response.status(505);
  response.send("Error page");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
