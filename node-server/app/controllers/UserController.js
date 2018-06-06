const mongoose = require('mongoose');
//User = mongoose.model('User');
// importing user model
const User = require('../models/UserModel');

//index
exports.findAll = function (req, res) {
    User.find({}, function(err, users) {
        if(err){
            res.send(err);
        }
        res.json(users);
    });
};

//create
exports.create = function (req, res) {
    if(!req.body) {
        return res.status(400).send({message: "User can not be empty"});
    }

    var user = new User(req.body);
    user.save(function(err, data) {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
};

// show
exports.findOne = function (req, res) {
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "User not found with id " + req.params.userId});                
            }
            return res.status(500).send({message: "Error retrieving user with id " + req.params.userId});
        } 
        if(!user) {
            return res.status(404).send({message: "User not found with id " + req.params.userId});            
        }
        res.json(user);
    });
};

exports.update = function(req, res) {
    // Update a user identified by the userId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "User not found with id " + req.params.userId});                
            }
            return res.status(500).send({message: "Error finding user with id " + req.params.userId});
        }

        if(!user) {
            return res.status(404).send({message: "User not found with id " + req.params.userId});            
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update User with id " + req.params.userId});
            } else {
                res.json(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a User with the specified userId in the request
    User.findByIdAndRemove(req.params.userId, function(err, user) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "User not found with id " + req.params.userId});                
            }
            return res.status(500).send({message: "Could not delete user with id " + req.params.userId});
        }

        if(!user) {
            return res.status(404).send({message: "User not found with id " + req.params.userId});
        }
// res.json is same as res.send
        res.send({message: "User deleted successfully!"})
    });

};
