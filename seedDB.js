require('dotenv').config()
const mongoose = require('mongoose');
const Blog = require('./models/blog');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PSWD}@localhost/${process.env.DB}?authSource=${process.env.SOURCE}`, {useNewUrlParser: true});
//h2 add class='inlinePostHeading' - subheadings use single quotes on classes
//signature should be an h2

var myBlog = new Blog ({
    title: 'And I Am Back!',
    body: ` 

<p>Today I am happy to say I have finally gotten my website back online. After about a year of it being offline for various reasons. I finally took the time to get it back up and running, just in time for the new year. I have recently started to work on, building some portfolio pieces. In doing that I want to remain consistent so I will start the 301 days of code journey. I am going to document the process of me building some projects and honing my skills as a web developer. </p>

<p>When I put this website online today, it will not even be remotely finished at all, so please don’t expect that. What I did is got the structure setup so it is online and people can get to it. The next step is to round it out into the product I want it to be. As I am fixing it, to improve this site. I will be writing about and posting the changes I have made on the site in a blog post.</p>

<p>I believe this can be a really great learning experience for me. To be able to document what I’m doing and keep my blog progression in step with the website & portfolio building progression it should be interesting.</p>

<h2 class='inlinePostHeading'>Getting the blog setup:</h2>
<p>As a part of this learning experience. I decided I wanted to build my own blog. I previously went the wordpress route and it just was not for me. I got stuck in the cycle of looking for the perfect theme, but never finding it. Then I wanted to customize one that I found and getting the pages to render how I wanted them. I spent more time fixing the theme than producing any content.</p>

<p>I decided I am going to build my own blog engine that works for me and has the features that I am looking for out of a blog. I think it will be a fun little project to do on the side while I am working on other things. So far what you see is what I have but I need it to be way more dynamic, automated and have formating options built-in. Right now I am doing most of it manually. Automation is up next!</p>

<h2 class='inlinePostHeading'>Building portfolio pieces:</h2>

<p>I want to start looking for some developer job. Before I do so, I want to build out several portfolio pieces to put up and demo on this website. I am going to document that entire process as well. As I get the portfolio pieces built, I will be adding the portfolio section to the homepage to show what all I have been working on!</p>

<h2 class='inlinePostHeading'>301 Days Of Code:</h2> 

<p>To help faciliate all of the coding goals that I have. To be more consistent with coding, getting better and building projects. I decided I am going to start the 301 Days Of Code. To at minimum code 1 hour a day. Every. Single. Day. What I work on each day will be posted to the blog and uploaded daily. </p>

<p>It all will end up tying together. I just wanted to create this blog to document the journey I am on in hopes to share some things I learn along the way with others!</p>

<h2 class="signature">-Dom</h2>`

});


myBlog.save((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('saved!');
  }
});



