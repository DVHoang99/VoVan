const server = require("../src");
const app = require("http").createServer(server);

app.listen(3000, () => {
  console.log("LISTEN http://localhost:3000");
});
