var express = require('express');
var router = express.Router();
var pool = require('./../pool');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var multer  = require('multer');
var bcrypt = require('bcrypt');
var fs = require('fs-extra');
var mongodb = require('mongodb');
var mongo = require("./mongo");
var ObjectID = require('mongodb').ObjectID;
var mongoURL = "mongodb://cmpe272:cmpe272@ds013495.mlab.com:13495/cmpe272";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/doc')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "."+ file.originalname)
    }
})

var upload = multer({ storage: storage }).single('myfile');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//shraddha
router.get('/bills', function (req, res, next) {
    console.log("Ithe ALA");
    mongo.connect(mongoURL, function () {
        var coll = mongo.collection('bills');
  coll.find({}).toArray(function (err, bills) {
      if (bills) {
          //console.log("inside call back" + JSON.stringify(bills))
          res.status(200).json({bills:bills});
      }
      else {
          res.status(401).json({message: "Error",success: false});
      }
    });
  });
});
//shraddha end

router.post('/doLogin', function (req, res, next) {

     console.log("Inside DoLogin");
     var reqUsername = req.body.userID;
     var reqPassword = req.body.password;

     // console.log(reqUsername);
     // console.log(reqPassword);

    //var query = "select * from user where password = 'jjjjjjj' and (username = 'deep@deep.com' OR email = 'deep@deep.com')";
    var query = "select * from user where  username = '" + reqUsername+ "' or  email = '" + reqUsername+ "'" ;
     //console.log("Query is :" + query);

    //kirati start
    pool.fetchData(function(err,results){
        if(err){
            res.status(401).json({message:"Login Error", success: false});
        }
        else
        {
            //console.log("Results: " + results.username);
            if(results.length > 0){
                    // console.log("Plain password :"  + reqPassword);
                    // console.log("Encrypted password : " + results[0].password);
                    bcrypt.compare(reqPassword, results[0].password, function(err, matches){
                    if (matches){
                        //console.log("valid Login");
                        var sessiondata = {firstName : results[0].firstname,
                        lastName : results[0].lastName,
                        email : results[0].email};
                        var token = jwt.sign(sessiondata , 'shhhhhh' , { expiresIn : 60*60 });
                        //console.log(results[0].data.userid);
                        res.status(201).json({message: "Login successful",
                                        success: true,username : reqUsername,
                                        userId : results[0].userid,
                                        token: token,
                                      });
                    }
                    else{
                        //console.log("Password not matched");
                        res.status(401).json({message:"Login Error", success: false});
                    }
                })
            }
            else {

                //console.log("Invalid Login");
                res.status(401).json({message:"Login Error", success: false});
            }
        }
    },query);
});

router.post('/doSignUp', function (req, res, next) {

    //console.log(JSON.stringify(req.body));
    var reqEmail = req.body.email;
        var reqUsername = req.body.username;

    //console.log(reqEmail);

    bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), function(err, password) {
        var query = "insert into user(email, username, password) values ('" + reqEmail + "','" + reqUsername + "','" + password + "')";
        //console.log("Query is :" + query);

        //kirati start
        pool.fetchData(function (err, results) {
            if (err) {
                //console.log("401 error");
                res.status(401).json({message: "Existing Email or Username", success: false});
            }
            else {
                if (results.affectedRows > 0) {
                    //console.log("Entry Done");
                    res.status(200).json({message: "Sign up successful", userId: results.insertId, success: true});
                }
                else {
                    //console.log("Error in entry");
                    res.status(401).json({message: "Existing Email or Username", success: false});
                }
            }
        }, query);
    });
});

router.post('/addProject', function (req, res, next) {


    console.log("Inside addProject");
    var reqProjectname = req.body.projectname;
    var reqDescription = req.body.projectdescription;
    var reqProjectBudgetMin = req.body.projectBudgetMin;
    var reqProjectBudgetMax = req.body.projectBudgetMax;
    var reqFilePath = req.body.projectFile;
    var reqEmployer = req.body.userid;
    var reqSkill = req.body.projectSkilstring




    var q = "insert into project(project_name, description, budget_range_start, budget_range_end) values ('website', 'simple site', 10, 50)"
    var query = "insert into project(project_name, description, budget_range_start, budget_range_end, projectSkills, userid, filepath) values ('" + reqProjectname + "','" + reqDescription + "','" + reqProjectBudgetMin + "','" + reqProjectBudgetMax + "','" + reqSkill  + "','" + reqEmployer + "','"  + reqFilePath + "')"
    console.log("Query is :" + query);

    //kirati start
    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        //console.log(results);
        if(err){
            res.status(401).json({message: "Error in project add",success: false});
        }
        else
        {
            if(results.affectedRows > 0){
                console.log("Entry Done" + results.insertId);
                res.status(201).json({message: "Project Added Successfully", success:true, projectId:  results.insertId });
            }
            else {
                console.log("Error in entry");
                res.status(401).json({message: "Error in project add",success: false});
            }
        }
    },query);
});

router.post('/setProfile', function (req, res, next) {


    console.log("Inside setProfile");
    var reqUserId = req.body.userId;
    var reqfirstname = req.body.firstname;
    var reqlastname = req.body.lastname;
    var reqemail = req.body.email;
    var reqphonenumber = req.body.phonenumber;
    var reqaboutme = req.body.aboutme;
    var reqSkills = req.body.userSkilstring;
    var reqPath = req.body.profileFile;

    console.log(reqfirstname);

    //var q = "update user set firstname = 'Deep' ,lastname = 'Bhuva', email = 'deep@deep.com',phone = '012345678' where userid = 1"
    var query = "update user set firstname = '" + reqfirstname + "' ,lastname = '" + reqlastname + "', email = '" + reqemail + "',phone = '" + reqphonenumber  + "', userskills = '" +  reqSkills + "' , profilepicpath = '" + reqPath + "' where userid = '" + reqUserId + "'";
    console.log("Query is :" + query);

    //kirati start
    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        console.log(results);
        if(err){
            res.status(401).json({message: "Error in profile set",success: false});
        }
        else
        {
            if(results.affectedRows > 0){
                console.log("Entry Done");
                res.status(201).json({message: "Profile Set Successfully", success:true });
            }
            else {
                console.log("Error in entry");
                res.status(401).json({message: "Error in profile set",success: false});
            }
        }
    },query);
});

router.post('/fetchProject', function (req, res, next) {

    var query = "select p.project_id , p.project_name, p.description, p.budget_range_start,p.budget_range_end, p.projectSkills,p.userid,avg(pu.bid_value) \n" +
        "AS 'bid_avg', count(pu.project_id) AS 'bid_count', u.firstname ,u.lastname  from project p inner join user u on p.userid= u.userid inner join project_user pu on p.project_id = pu.project_id group by pu.project_id \n";
    //console.log("Query is :" + query);

    pool.fetchData(function(err,results){
        if(err){
            res.status(401).json({message: "Error in profile set",success: false});
        }
        else
        {
            res.status(201).json(results);
        }
    },query);


});

router.post('/fetchprojectusers', function (req, res, next) {

    console.log("Inside fetchprojectusers");
    var query = "select * from project_user pu inner join user u on u.userid = pu.user_id where project_id ='"+req.body.project_id+"'";
    console.log("Query is :" + query);

    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        if(err){
            res.status(401).json({message: "Error in profile set",success: false});
        }
        else
        {
            // results.forEach(function(obj) {
            //     console.log("Inside this");
            //     if (obj.profilepicpath !== null) {
            //         console.log(obj);
            //         var buffer = fs.readFileSync(obj.profilepicpath);
            //         var bufferBase64 = new Buffer(buffer);
            //         obj.encodeImage = bufferBase64;
            //     } else {
            //         console.log(obj);
            //         var buffer = fs.readFileSync("./uploads/default/default_img.png");
            //         var bufferBase64 = new Buffer(buffer);
            //         obj.encodeImage = bufferBase64;
            //     }
            // });
            res.status(201).send(JSON.stringify(results));
        }
    },query);
});

router.post('/addmybid', function (req, res, next) {

    console.log("Inside addmybid");
    var q = "insert into project_user values (1,7,25,30)"
    //var query_for_userid = "select userid from user where username ='"+req.body.username+"'";

    console.log(req.body);

    var query = "insert into project_user values ('" + req.body.project_id+ "','" + req.body.userId + "','" + req.body.bid_value + "','" + req.body.bid_period+"')";
    //console.log("Query is :" + query);

    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        if(err){
            res.status(401).json({message: "Error in profile set",success: false});
        }
        else
        {
            console.log(results);
            res.status(201).json({message: "Success",success: true});
        }
    },query);


});

router.post('/fetchmybids', function (req, res, next) {

    //console.log("Inside fetchmybids");
    var query = "select * from project p inner join project_user pu on p.project_id = pu.project_id where pu.user_id = " + req.body.user_id

    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        if(err){
            res.status(401).json({message: "Error",success: false});
        }
        else
        {
            //console.log(results);
            res.status(201).json(results);
        }
    },query);
});

router.post('/fetchmyPostedprojects', function (req, res, next) {

    console.log("Inside fetchmyPostedprojects");
    var query = "select * from project where userid = 108"

    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        if(err){
            res.status(401).json({message: "Error",success: false});
        }
        else
        {
            console.log(results);
            res.status(201).json(results);
        }
    },query);
});

router.post('/fetchskills', function (req, res, next) {

    console.log("Inside fetchskils");
    var query = "select skill_id as id ,skill_name as name from skill "

    pool.fetchData(function(err,results){
        //console.log('---------------------------------------');
        if(err){
            res.status(401).json({message: "Error",success: false});
        }
        else
        {
            console.log(results);
            res.status(201).json(results);
        }
    },query);
});

router.post('/addskillsToProject', function (req, res, next) {

    var reqProjectId = req.body.projectId;
    var skills = req.body.skills;

    console.log(reqProjectId);
    console.log(skills);


    //33
        //[ { id: 2, name: '.Net' }, { id: 6, name: 'ReactJS' } ]


    skills.map((skill,index) => {
        var query = "insert into project_skill(project_id, skill_id) values(" + reqProjectId + "," + skill.id + ");"
        pool.fetchData(function(err,results){
            //console.log('---------------------------------------');
            if(err){
                res.status(401).json({message: "Error",success: false});
            }
            else if(index !== skills.length -1)
            {
                console.log(results);
            }
            else
            {
                res.status(201).json(results);
            }
        },query);
    }
)
});
router.post('/addskillsToUser', function (req, res, next) {

    var reqUserId = req.body.userId;
    var skills = req.body.skills;

    console.log("USERID : " + reqUserId);
    console.log(skills);
    //33
    //[ { id: 2, name: '.Net' }, { id: 6, name: 'ReactJS' } ]
    skills.map((skill,index) => {
            var query = "insert into user_skill (user_id, skill_id) values(" + reqUserId + "," + skill.id + ");"
            pool.fetchData(function(err,results){
                //console.log('---------------------------------------');
                if(err){
                    res.status(401).json({message: "Error",success: false});
                }
                else if(index !== skills.length -1)
                {
                    console.log(results);
                }
                else
                {
                    res.status(201).json(results);
                }
            },query);
        }
    )
});
router.post('/fetchUserDetails', function (req, res, next) {

var requserId =  req.body.userid;
//console.log(requserId);

    console.log("Inside Uesr Details");
    var query = "select * from user where userid = " + requserId ;
    console.log("Query is :" + query);

    pool.fetchData(function(err,results){
        if(err){
            res.status(401).json({message: "Error in profile set",success: false});
        }
        else
        {
            //kirati start
            var userdetails = results;
            console.log("Inside 2 results");
            console.log(userdetails);
            var qry = "select * from user_skill where user_id = " + requserId.toString() ;
            console.log("Query is :" + query);
            pool.fetchData(function(err,results){
                //console.log('---------------------------------------');
                if(err){
                    res.status(401).json({message: "Error",success: false});
                }
                else
                {
                    var userskills = results;
                    console.log(userskills);
                    res.status(201).json({userdetails: userdetails,userskills: userskills });
                }
            },qry);
        }
    },query);


});

router.post('/fetchPeople', function (req, res, next) {

    var requserId =  req.body.user_id;
    console.log("Inside People");

    mongo.connect(mongoURL, function () {

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('authors');

        coll.find({}).toArray(function (err, user1) {
            if (user1) {
                console.log("inside call back" + JSON.stringify(user1))
                res.status(200).json({data:user1, status:true, message: "Success" });
            }
            else {
                res.status(401).json({message: "Error",success: false});
            }
        });
    });


});


// router.post('/uploadFile', upload.single('myfile'), function (req, res, next){
//     upload(req, res, function (err) {
//         if (err) {
//             return res.status(501).send({error:err});
//         }
//         res.json({originalname :req.file.originalname, uploadname :req.file.filename});
//     })
// })

router.post('/uploadFile', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.status(501).send({error:err});
        }
        //res.json({originalname :req.file.originalname, uploadname :req.file.filename});
        res.status(200).send(JSON.stringify({filename : req.file.filename, originalname :req.file.originalname,success: true}))
    })
})


router.get('/downloadFile', (req, res) => {
    if(req.query.filepath!='undefined'){
        var buffer = fs.readFileSync(req.query.filepath);
        console.log(req.query.filepath);
        console.log(buffer);
        var bufferBase64 = new Buffer(buffer);
        res.status(200).send(bufferBase64);
    }
});





module.exports = router;
