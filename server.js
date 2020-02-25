var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);
app.use((req, res) => {
    if(res.status(404)){
        res.send({url: req.originalUrl + ' not found'})
    }
});
console.log('todo list RESTful API server started on: ' + port);