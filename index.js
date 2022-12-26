const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001 

const app = express();
app.use(cors({

}));
app.use(express.json());

app.get("/", (req, res, next) => {
  res
  .send({server: "Server is running"});

  console.log("GET on '/'");
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);

})