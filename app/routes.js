
var Courses = require('./models/courses');

module.exports = function(app) {

    app.get('/api/courses', function(req, res) {

        Courses.find(function(err, courses) {
            console.log(err);
            if (err)
                res.send(err)

            res.json(courses); 
        });
    });

    app.post('/api/courses', function(req, res) {

        Courses.create({
            title : req.body.text,
         
        }, function(err, courses) {
            if (err)
                res.send(err);

            Courses.find(function(err, courses) {
                if (err)
                    res.send(err)
                res.json(courses);
            });
        });

    });

    app.delete('/api/courses/:courses_id', function(req, res) {
        Courses.remove({
            _id : req.params.courses_id
        }, function(err, courses) {
            if (err)
                res.send(err);

                Courses.find(function(err, courses) {
                if (err)
                    res.send(err)
                res.json(courses);
            });
        });
    });

    app.put('/api/courses/:courses_id', function(req, res) {
       
        Courses.findByIdAndUpdate(req.params.courses_id, { title: req.body.title }
        , function(err, courses) {
            if (err)
                res.send(err);

                Courses.find(function(err, courses) {
                if (err)
                    res.send(err)
                res.json(courses);
            });
        });
    });
};