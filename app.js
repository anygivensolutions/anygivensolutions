const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const hbs = require('hbs');
const session = require('express-session');
const {check, validationResult} = require('express-validator/check');
const {matchedData} = require('express-validator/filter');
const expressSanitize = require('express-sanitizer');
const nodemailer = require('nodemailer');
const serveStatic = require('serve-static');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/anygivensolutions");

//app config
app.set ('view engine', 'hbs');
hbs.registerHelper('toJSON', function(obj) {
  return JSON.stringfy(obj. null, 2);
});

hbs.registerHelper('toNormalDate', function(obj) {
  return obj.toDateString();
});

hbs.registerHelper('subString', function(obj) {
  return objs.substring(0,300);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitize());
app.use(methodOverride('_method'));

app.use(session({
  secret: 'time to grind',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

app.use(flash());
app.use(function(req, res, next){
  res.success = req.flash("success");
  next();
});

hbs.registerPartials(__dirname + '/views/partials');
// app.use(express.static(__dirname + '/public'));
app.use(serveStatic('public'));
app.use(serveStatic('public/styles/fonts'))

//home route 
app.get('/', (req, res) => {
  res.render('landing', {
    pageTitle: 'Ang Given Solutions | Home'
  });
});

app.get('/contact', (req, res)=> {
    res.render('contact/contact', {
        pageTitle: 'Any Given Solutions | Contact'
    });
});

//blog entry 
app.get('/blog', (req, res) => {
  Blog.find().sort({ '_id': -1
  }).exec(function(err, allBlogs) {
    if(err) {
      console.log(err);
    } else {
      res.render('blog/inder', {
        pageTitle: 'Any Gen Soltuions | Blog',
        blogs: allBlogs
      });
    }
  });
});

//show one post 
app.get('/blog/:id', (req,res) => {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if(err) {
      console.log(err);
    } else {
      res.render('blog/show', {
        blog: foundBlog
      });
    }
  });
});



app.listen(3000, ()=> {
  console.log('=====Serving AnyGivenSolutions =====');
});
