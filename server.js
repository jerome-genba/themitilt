var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    LearningRepository = require('./app/scripts/api/learningRepository').LearningRepository,
    Learning = require('./app/scripts/domain/learning').Learning;


var app = express();

app.use(express.logger());

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, "app")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = process.env.PORT || 5000;

var learningRepository = new LearningRepository();
learningRepository.add(new Learning('Learning 1', 'Victor Hugo', new Date(2013, 6, 28, 13, 7, 43)));
learningRepository.add(new Learning('Learning 2', 'Gandhi', new Date(2013, 6, 27, 9, 32, 14)));

app.get('/api/learnings', function(req, res) {
   res.json(learningRepository.getAll());
});

app.listen(port, function() {
    console.log("Listening on " + port);
});