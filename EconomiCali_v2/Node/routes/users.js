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
var nodemailer = require('nodemailer');
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


router.post('/doLogin', function (req, res, next) {
    console.log("Inside DoLogin");
    var reqUsername = req.body.userID;
    var reqPassword = req.body.password;
    console.log(reqUsername);
    console.log(reqPassword);
    mongo.connect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('organization');
        coll.findOne({User_name: reqUsername, Password: reqPassword}, function (err, user1) {
            if (user1) {
                console.log(user1);
                res.status(201).json({
                    message: "Login successful",
                    success: true, username: reqUsername,
                    userId: user1.userid,
                    username: user1.User_name,
                    companyId: user1.Comany_id
                });
            }
            else {
                res.status(401).json({message: "Login Error", success: false});
            }
        });
    });
});

        //  // console.log(reqUsername);
        //  // console.log(reqPassword);
        //
        // //var query = "select * from user where password = 'jjjjjjj' and (username = 'deep@deep.com' OR email = 'deep@deep.com')";
        // var query = "select * from user where  username = '" + reqUsername+ "' or  email = '" + reqUsername+ "'" ;
        //  //console.log("Query is :" + query);
        //
        // //kirati start
        // pool.fetchData(function(err,results){
        //     if(err){
        //         res.status(401).json({message:"Login Error", success: false});
        //     }
        //     else
        //     {
        //         //console.log("Results: " + results.username);
        //         if(results.length > 0){
        //                 // console.log("Plain password :"  + reqPassword);
        //                 // console.log("Encrypted password : " + results[0].password);
        //                 bcrypt.compare(reqPassword, results[0].password, function(err, matches){
        //                 if (matches){
        //                     //console.log("valid Login");
        //                     var sessiondata = {firstName : results[0].firstname,
        //                     lastName : results[0].lastName,
        //                     email : results[0].email};
        //                     var token = jwt.sign(sessiondata , 'shhhhhh' , { expiresIn : 60*60 });
        //                     //console.log(results[0].data.userid);
        //                     res.status(201).json({message: "Login successful",
        //                                     success: true,username : reqUsername,
        //                                     userId : results[0].userid,
        //                                     token: token,
        //                                   });
        //                 }
        //                 else{
        //                     //console.log("Password not matched");
        //                     res.status(401).json({message:"Login Error", success: false});
        //                 }
        //             })
        //         }
        //         else {
        //
        //             //console.log("Invalid Login");
        //             res.status(401).json({message:"Login Error", success: false});
        //         }
        //     }


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
    var reqSkill = req.body.projectSkilstring;

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

router.post('/getcomment',function(req,res,next){
    var id = req.body.id;
    var commentText = req.body.comment;
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('organization_details');
        coll.findOne({Comany_id: req.body.company_id,bill_no: req.body.bill_no },function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
});


router.post('/comments',function(req,res,next){
    console.log(req.body.company_id);
    console.log(req.body.username);
    console.log(req.body.comment);
    console.log(req.body.bill_no);
    mongo.connect(mongoURL, function(){
        var coll = mongo.collection('organization_details');
        coll.find({Comany_id: req.body.company_id,bill_no: req.body.bill_no }).toArray(function (err, user1) {
            //console.log("user1" + JSON.parse(user1));
            if (user1.length > 0) {
                var comments = user1[0].comment
                comments.push({username: req.body.username, comment: req.body.comment})
                coll.update({Comany_id: req.body.company_id, bill_no: req.body.bill_no}, {
                    $set: {
                        comment: comments,
                    }
                }, function (err, resp) {
                    if (resp) {
                        console.log("comments added to existing record");
                        res.status(201).json({message: "Profile Set Successfully", success: true});
                    }
                    else {
                        res.status(401).json({message: "Error in profile set", success: false});
                    }
                });
            }
            else {
                console.log("Add new value")
                coll.insertOne({Comany_id: req.body.company_id,bill_no: req.body.bill_no, comment : [{username :req.body.username,comment: req.body.comment}]},function (err, add){
                    if(add){
                        console.log("Entry Done");
                        res.status(201).json({message: "Profile Set Successfully", success:true });
                    }
                    else {
                        console.log("Error in entry");
                        res.status(401).json({message: "Error in profile set",success: false});
                    }
                })

            }
        });
    });
});


router.post('/sendMail',(req,res)=>{

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

        coll.aggregate([
            {
                $group : {
                    _id :  "$author",
                    author : { $first: '$author' },
                    about : { $first: '$about' },
                    email : { $first: '$email' },
                    phone : { $first: '$phone' },
                    profile_pic : { $first: '$profile_pic' },
                }
            }
        ]).toArray(function (err, user1) {
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


router.post('/fetchbills',(req,res)=> {

    console.log("Inside Fetch bills");
    mongo.connect(mongoURL, function () {

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('bills');

        // coll.aggregate({"category": req.body.categorydata},
        //     $group:{},

        coll.aggregate(
        [{"$group" : { _id: {category : "$category" ,author:  "$introducer" }, count : {$sum : 1}}}]
    ).toArray(function (err, result) {

            if (result) {
                console.log("inside call back" + JSON.stringify(result))
                res.status(200).json({data: result, status: true, message: "Success"});
            }
            else {
                res.status(401).json({message: "Error", success: false});
            }

        });
    });
});

router.post('/fetchbillsData',(req,res)=> {

    console.log("Inside Fetch bills passes failed analysis");
    mongo.connect(mongoURL, function () {

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('bills');

        // coll.aggregate({"category": req.body.categorydata},
        //     $group:{},

        coll.aggregate(
            [{"$group" : { _id: {category : "$category" ,status:  "$status" }, count : {$sum : 1}}}]
        ).toArray(function (err, result) {

            if (result) {
                console.log("inside call back" + JSON.stringify(result))
                res.status(200).json({data: result, status: true, message: "Success"});
            }
            else {
                res.status(401).json({message: "Error", success: false});
            }
        });
    });
});


router.post('/fetchPreferencesByUser',(req,res)=> {

    console.log("Inside Fetch bills passes failed analysis");
    mongo.connect(mongoURL, function () {

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('organization');
        coll.findOne({User_name:req.body.username} , function (err, user1) {
            if (user1) {
                console.log("inside call back" + JSON.stringify(user1))
                res.status(200).json({data:user1.preferences, status:true, message: "Success" });
            }
            else {
                res.status(401).json({message: "Error",success: false});
            }
        });


    });
});


router.post('/savePreferences',(req,res)=> {

    console.log("Inside Fetch bills passes failed analysis");
    mongo.connect(mongoURL, function () {
        console.log(req.body.preferences)

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('organization');
        coll.update({User_name: req.body.username}, {
            $set: {
                preferences: req.body.preferences,
            }
        },{upsert:true}
            , function (err, resp) {
            if (resp) {
                console.log("Preferences added to existing record");
                res.status(201).json({message: "Profile Set Successfully", success: true});
            }
            else {
                res.status(401).json({message: "Error in Preferences set", success: false});
            }
        });
    });
});


router.post('/uploadFile', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.status(501).send({error:err});
        }
        //res.json({originalname :req.file.originalname, uploadname :req.file.filename});
        res.status(200).send(JSON.stringify({filename : req.file.filename, originalname :req.file.originalname,success: true}))
    })
});


router.get('/downloadFile', (req, res) => {
    if(req.query.filepath!='undefined'){
        var buffer = fs.readFileSync(req.query.filepath);
        console.log(req.query.filepath);
        console.log(buffer);
        var bufferBase64 = new Buffer(buffer);
        res.status(200).send(bufferBase64);
    }
});


router.post('/fetchAllbills', function (req, res, next) {

    var requserId =  req.body.user_id;
    console.log("Inside Bills");

    mongo.connect(mongoURL, function () {

        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('bills');

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





module.exports = router;

































































































































































































































































































