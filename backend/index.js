const express = require("express"); //include all the express related
// libraries used for rest api and db connectivity

const app = express(); // react app would know the backend and acording
// hit the backend with the appropriate rest api.
const mysql = require("mysql2"); //include all the mysql libararies
// give the target db connections details
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "rahul",
});

app.listen(3001, () => {
  console.log("welcome to express server");
});

//sending a message to the client
app.get("/", (req, res) => {
  //getting the route
  //   res.send("welcome to express");
  const qry = "insert into custdata(custname,custmob) values('react', 1234)";
  //execute the db -(const name)
  db.query(qry, (err, result) => {
    res.send("welcome to db connections" + result);
  });
});
