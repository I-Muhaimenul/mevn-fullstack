module.exports = function(app){
    //calling the controller
    var users = require('../controllers/UserController');
    // define each routes and methodes with controller
   
    // Retrieve all Users
    app.get('/users', users.findAll);

     // Create a new User
     app.post('/users', users.create);

    // Retrieve a single User with userId
    app.get('/users/:userId', users.findOne);

    // Update a User with userId
    app.put('/users/:userId', users.update);

    // Delete a User with noteId
    app.delete('/users/:userId', users.delete);
    // app.route('/users')
    //     .get(userList.list_all_users) // index
    //         .post(userList.create_a_user); //create

    // app.route('users/:userId')
    //     .get(userList.read_a_user); //show
}