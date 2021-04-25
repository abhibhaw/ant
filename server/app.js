const express = require("express");
require("./db/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

const app = express();

app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello from API");
});

app.listen(4000, () => {
  console.log("Server Started at PORT 4000");
});
