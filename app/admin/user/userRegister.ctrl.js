var userSchema = require('./userRegister.model');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var jwt= require('jsonwebtoken');
var config= require('../../../config/config');
// var smtpTransport = require('nodemailer-smtp-transport');
var userCtrl = {};

userCtrl.create = function (req, res) {
  // console.log(req.body);
  var userRegister = new userSchema(req.body);
  userRegister.save(function (err, results) {
    if (!err) {
      console.log("successfully created user");
      res.json(200);
    } 
    else {
      console.log(results);
    }
  })
}

// userCtrl.reset=function(req,res){
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//        type: 'OAuth2',
//        user: 'mahesh2149@gmail.com',
//             clientId: '166992323991-lbu6e9v2suhl7j82mah3mtlvoamluq4o.apps.googleusercontent.com',
//             clientSecret: 'yr7_dq1Gt-E22LYg1M78uXzF',
//             refreshToken: '1/m7LCe7UzRFEbMd4uekc0Dr222Rofpuz-mOPuaLhHQPldSqKkl-LEaHidkLE1qyIr',
//             accessToken: 'ya29.GltKBW1RXuOLINad1GUvZLTYoW7_56p0jCjtYGIRMn0YkFibkL6vAMiq6SBn10p5FHozzslkuwgx8RYcQcwlZ1Jf8ESuNUhgFNhc5V8m_Widgsr5bL_pRwQMiGC_'
        
//     }
// })

// var mailOptions = {
//     from: 'My Name <my.email@gmail.com>',
//     to: req.body.email,
//     subject: 'Nodemailer test',
//     text: 'Hello World!!'
// }

// transporter.sendMail(mailOptions, function (err, res) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Email Sent');
//     }
// })
// }
// bikeCtrl.search=function(){

// };
// bikeCtrl.update=function(){

// };
// bikeCtrl.delete=function(){

// };
userCtrl.edit=function(req,res){
    var params=req.body;
  userSchema.update({},{$set:{}},function(err,results){
    if (!err) {
      res.json(results);
    } else {
      console.log(results);
    }
  })

}

// userCtrl.search = function (req, res) {

//   userSchema.find({}, function (err, results) {
//     if (!err) {
//       res.json(results);
//     } else {
//       console.log(results);
//     }
//   })
//   console.log("hello");

// };

userCtrl.login = function (req, res) {
 if (!req.body.userName) {
      res.json({ success: false, message: 'No username was provided' }); // Return error
     } else {
      // Check if password was provided
      if (!req.body.password) {
        res.json({ success: false, message: 'No password was provided.' }); // Return error
      }else {
  userSchema.findOne({
    userName: req.body.userName,
    password: req.body.password
  }, function (err, user) {
     console.log(user);
          // Check if error was found
          if (err) {
            res.json({ success: false, message: err }); // Return error
          } else {
            // Check if username was found
            if (!user) {
              res.json({ success: false, message: 'Username details are wrong.' }); // Return error
            }
            else{
            const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
             res.json({ success: true, message: 'Success!', token: token, user: { username: user.userName } }); // Return success and token to frontend
            }
          }
  }
 )}
}};
    // if (!err) {
    //   if (results == null) { //IF USER DETAILS ARE WRONG 
    //     res.json(400);
    //   } 
    // else {
    //     res.json(results);
    //     //  console.log(results);
    //   }


    // } else {
    //   console.log("user not found");
    // }
    // ----------------------------------------
  // })
  //   if (!req.body.userName) {
  //     res.json({ success: false, message: 'No username was provided' }); // Return error
  //   } else {
  //     // Check if password was provided
  //     if (!req.body.password) {
  //       res.json({ success: false, message: 'No password was provided.' }); // Return error
  //     } else {
  //       // Check if username exists in database
  //       userSchema.findOne({ username: req.body.userName, password: req.body.password }, (err, user) => {
  //         console.log(user);
  //         // // Check if error was found
  //         // if (err) {
  //         //   res.json({ success: false, message: err }); // Return error
  //         // } else {
  //         //   // Check if username was found
  //         //   if (!user) {
  //         //     res.json({ success: false, message: 'Username not found.' }); // Return error
  //         //   } else {
  //         //     const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
  //         //     // Check if password is a match
  //         //     if (!validPassword) {
  //         //       res.json({ success: false, message: 'Password invalid' }); // Return error
  //         //     } else {
  //         //       const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
  //         //       res.json({ success: true, message: 'Success!', token: token, user: { username: user.username } }); // Return success and token to frontend
  //         //     }
  //         //   }
  //         // }
  //       });
  //     }
  //   }

  userCtrl.profile=function (req, res) {
    // Search for user in database
    User.findOne({ _id: req.decoded.userId }).select('userName').exec((err, user) => {
      // Check if error connecting
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        // Check if user was found in database
        if (!user) {
          res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
        } else {
          res.json({ success: true, user: user }); // Return success, send user object to frontend for profile
        }
      }
    });
  };

module.exports = userCtrl;
