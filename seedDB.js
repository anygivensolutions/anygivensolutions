const mongoose = require ('mongoose');
const Blog = require('./models/blog');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/personalApp", {useMongoClient: true});

// seedDB
//h2 add class='inlinePostHeading' - subheadings use single quotes on classes
//signature should be an h2
var myBlog = new Blog ({
  title: 'Code Code Code',
  body: `<p>What can I say? The last 3 months have been quite the journey for me. Over that time I have been coding and learning full time. The goal was to deepen what was then my shallow knowledge of front end development. About 3 weeks in while taking a course that introduced me to backend technologies like NodeJS, the ExpressJS framework and a host of others. I ended up scrapping my sole focus on the front end. I fell in love with backend technology. It is much cleaner and in my opinion less tedious because you don't have to find a way to hide things the user shouldn't have access to on the front end and it is just overall more convenient. Not to mention it is just more of my speed. Yes, for several years my goal was to always be just front end side of things but as my knowledge grew that changed. Now I can say I am full stack. I have nothing against the front end and I will continue to learn and grow my knowledge in that area. But also include more backend tech into my stack. Right now I'm focusing on honing my craft with the current stack of Node, MongoDB(which I love), pure Javascript (yes I am still on my kick of trying to use solely pure JavaScript where ever I can), jQuery when absolutely needed, Sass, HTML, and CSS. Soon I will be picking up VueJS too. That is on the next up list for me.</p>
<p>During my journey, I have also been working a lot with servers specifically the Ubuntu distro. I just started doing that about a month ago and I have to say it is awesome!!! It was again on accident since then I have developed a great passion for working with servers and general server admin stuff.  This happened because my first client needed to have their site hosted. I did a lot of research and ended up going with Digital Ocean. This was my first ever experience working with any server-side distro at all. I quickly learned to navigate through and picked up basic security and everything else I needed to learn to get the site up and running. I will continue to maintain their server during the life of the project. In conjunction with Ubuntu, I am using Nginx as a reverse proxy to the app running on Node. Nginx was a bit more confusing on the first initial setup. I am a bit more familiar with it now and can get it up and running but I definitely have a lot more to learn to become more fluent with it.</p>
<p>I already knew before I even started this journey that I love to code but my passion for it has become stronger than I ever imagined. My consistency with coding every day has increased by 1000. In the past, I would code just a few hours here and there every other day. Now I couldn't go a day without spending several hours writing code. It is just a way of life for me now. Over the next few posts, I will be sharing in more detail what I have built, the lessons learned along with any tips I can share too! I want to be able to help others even if it is just one person, to get started or continue on their journey. Especially when times get dark and it seems like you aren't making any progress. That is when we can use the inspiration and motivation the most. That is when you have to keep pushing and have the perseverance.</p>
<p>As you can also see I scrapped my website and completely rebuilt it. My old site was a WordPress site hosted on GoDaddy.  I have since left them for DigitalOcean. They're exactly what I was looking for from a hosting provider. I chose them over another option I was mulling over, Heroku. Heroku was very automated and really hands off so you can just work on your app and deploy it which is great for people who desire that. I, however, prefer a more hands-on approach so that led me to DO and I taught myself how to work with Ubuntu and Nginx for a reverse proxy to my app. Its crazy just a few weeks ago I had never heard of Nginx and never used Ubuntu and had very very little knowledge of the command line. Now it is a complete 180. I'm now looking into building my own mini data center/server room starting off with something small like 60TB or so probably 100TB would be better.</p>
<p>I am still looking to do a collaboration project. So if you are into the same or a similar stack that I have mentioned feel free to reach out I would love to see if we could work together on something.</p>
<h2 class='inlinePostHeading'>Tips:</h2>
<p>When it comes to coding there is simply no substitute for putting in the hours. As much as you can. The more the better. Time and consistency can get you a long way. Continue to build on your progress, step out of your comfort zone, push the boundaries. Get stuck for a few days and in the end, you will come out swinging with a wealth of knowledge to utilize going forward.</p>
<p>Writing code has changed my life and I am just getting started. Come along with me for this continuing journey as up next I will begin to look for a job in the dev community. If you need a website or looking to hire, let's talk! Until next time, happy coding.</p>
<h2 class=“signature”>-Dom</h2>`,

});


var myBlog01 = new Blog ({
  title: 'Launch Time',
  body: `<h2> Launch Day! </h2>

<p>The time has finally come for the launch of my new site! It is a very exciting time for me and a long time coming as well. I have been working on getting pieces together for my portfolio. So that I can begin to look for developer jobs. During my 3 months of coding, I have made a lot of projects and learned a lot too! Some of the projects are up on Github that you can go and view. I will be providing more posts in the coming days that goes over everything up until where I am now. Beyond that, I will continue to document my journey as I look for developer jobs and my continued learning progress.</p>

<p>The site is just at v1 there are plenty more improvements and feature implementations coming both big and small. I wanted to get my MVP site out there to get me started and that is done. Take a look around and let me know what you think. You can @ or DM me on Twitter for now until I get the comment section functioning on the blog posts. That will probably be the next task I concur on here.</p>

<p>***Note if you are looking for my old posts from my previous site. I will be posting them in the next few days as I reformat them for the new site</p>
<h2 class="signature">-Dom</h2>`
});




myBlog.save((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('saved!');
  }
});

myBlog01.save((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('saved!');
  }
});
