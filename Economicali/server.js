const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
var cmpedb;

app.use(express.static('.'));


// Connect to the heroku db (project cmpe280-websockets)
MongoClient.connect("mongodb://cmpe272:cmpe272@ds013495.mlab.com:13495/cmpe272", function(err, db) {
   cmpedb=db.db("cmpe272");
   //console.log(db);
if(!err) {
    console.log("Mongo is connected");
  }
  app.listen(9000,()=>{
      console.log("listening on port 9000");
  });
}); 

/*app.listen(9002,()=>{
    console.log("listening on port 9000");
}); */

app.get('/',(req,res)=>{
res.sendfile('./htmlpages/sample.html');
});


  
app.get('/data',(req,res)=>{
    
        cmpedb.collection("test").findOne({name:'abcd'}, function(err, result) {
          if (err) throw err;
          res.send(result);  
        });
      });


module.exports = app;