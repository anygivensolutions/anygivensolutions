const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const hbs = require('hbs');
const session = require('express-session');
const Blog = require ('./models/blog');
const {check, validationResult} = require('express-validator/check');
const {matchedData} = require('express-validator/filter');
const expressSanitize = require('express-sanitizer');
const nodemailer = require('nodemailer');
const serveStatic = require('serve-static');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require ('./models/user');
const app = express();
require('dotenv').config();
app.use(require('express-session')({
    secret:'timeTogrind',
    resave: false,
    saveUninitialized: false
}));
// db config
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PSWD}@localhost/anygivensolutions?authSource=${process.env.SOURCE}`, {useNewUrlParser: true});

//app config
app.set ('view engine', 'hbs');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
hbs.registerHelper('toJSON', function(obj) {
  return JSON.stringfy(obj. null, 2);
});
// hbs configuration 
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('toNormalDate', function(obj) {
  return obj.toDateString();
});

hbs.registerHelper('subString', function(obj) {
  return obj.substring(0,300);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitize());
app.use(methodOverride('_method'));

app.use(session({
  secret:`${process.env.SAUCE}`,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

//passport configuration


app.use(flash());
app.use(function(req, res, next){
  res.success = req.flash("success");
  next();
});

// serve public routes
app.use(serveStatic('public'));
app.use(serveStatic('public/styles/fonts'));

//home route 
app.get('/', (req, res) => {
  res.render('landing', {
    pageTitle: 'Any Given Solutions | Home'
  });
});

app.get('/contact', (req, res)=> {
    res.render('contact/contact', {
        pageTitle: 'Any Given Solutions | Contact'
    });
});

//blog entry 
app.get('/blog', (req, res)=> {
    Blog.find().sort({'_id': -1}).exec(function(err, allBlogs) {
        if(err) {
            console.log(err);
    } else {
        res.render('blog/index', {
            pageTitle: 'Any Given Solutions | Blog',
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

// admin route 
app.get ('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard/index', {
        pageTitle: 'Any Given Solutions | Dash'
    });
});
//register
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
        console.log(err);
        return res.render('/register');
    } else {
        passport.authenticate('local')(req, res, function(){
       res.redirect('/dashboard'); 
        });
    }
    });
});

app.post('/register', (req, res) => {
    res.send('register post route');
});
//sign up


//log in 
app.get('/login', (req, res) => {
    res.render('login');

});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}), (req, res) => {
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) {
    return next();
    } res.redirect('/login');
}

app.listen(3000, ()=> {
  console.log('=====Serving AnyGivenSolutions =====');
});
