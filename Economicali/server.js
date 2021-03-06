const MongoClient = require('mongodb').MongoClient;

const express = require('express');

var nodemailer = require('nodemailer');

var bodyParser = require('body-parser');

const app = express();

var cmpedb;

app.use(express.static('.'));

app.use(bodyParser.json({limit: '50mb'}));


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



app.get('/',(req,res)=>{
res.sendfile('./htmlpages/dashboard.html');
});

app.get('/landingpage',(req,res)=>{
    res.sendfile('./htmlpages/landingpage.html');
});

/*sample test flow */ 
app.get('/data',(req,res)=>{
    
        cmpedb.collection("test").findOne({name:'abcd'}, function(err, result) {
          if (err) throw err;
          res.send(result);  
        });
      });

/* Get all the bills */
app.get('/bills',(req,res)=>{
cmpedb.collection("bills").find({}).toArray(function(err,result){
    if (err) throw err;
    //console.log(result);
    res.send(result); 
})
});

/* Get all the Legislative people */

app.get('/authors',(req,res)=>{
    cmpedb.collection("authors").find({}).toArray(function(err,result){
        if (err) throw err;
        res.send(result); 
    })
    });


        /*for dashboard pie chart representing pass,failed and introduced for each category*/
app.post('/dashboard',(req,res)=>{
    console.log(req.body.categorydata);
    cmpedb.collection("bills").find({"category":req.body.categorydata}).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.post('/sendMail',(req,res)=>{

    console.log(req);

    console.log("Inside send Mail server");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kiratib216@gmail.com',
            pass: 'Jayu@216'
        }
    });

    var mailOptions = {
        from: 'kiratib216@gmail.com',
        to: req.body.email ,
        subject: 'Contact Us',
        text: req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            // res.status(400).send({message:"Success"});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({message:"Success"});
        }
    });
});

module.exports = app;














































