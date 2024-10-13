const express = require('express');
const axios =require("axios");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
app.get('/xyz',async (req, res) => {
  axios({
    method:"GET",
    url:req.query.url,
  }).then(response=>{
    res.send(response.data)
  }).catch(err=>{
    res.send(err.code)
  })
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})